import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    usertype: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    dateofbirth: Date,
    password: String,
}, {collection: 'UserInfo'});
mongoose.model("UserInfo", usersSchema);
export default usersSchema