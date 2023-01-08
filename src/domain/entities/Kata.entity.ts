import mongoose from "mongoose";

export const userEntity = () => {
    let userSchema = new mongoose.Schema(
        {
            name: String,
            email: String,
            level: Number,
            user: String,
            date: String,
            valoration: Number,
            chances: Number
        }
    )

    return mongoose.model('Users', userSchema)
}