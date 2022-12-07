import express from 'express'
import cors from 'cors'
import session from 'express-session'
import UsersController from "./users/users-controller.js";
import RecipesController from "./recipes/recipes-controller.js";

import MoviesController from "./movies/movies-controller.js";
import LikesController from "./likes/likes-controller.js";
import SessionController from "./session-controller.js";
import CommentsController from "./comments/comments-controller.js";
import mongoose from "mongoose";
import FollowsController from "./follows/follows-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb+srv://runhanshi:970329@cluster0.jexfynk.mongodb.net/?retryWrites=true&w=majority', options)

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
UsersController(app)
RecipesController(app)
CommentsController(app)

MoviesController(app)
LikesController(app)
SessionController(app)
FollowsController(app)
app.listen(4000)