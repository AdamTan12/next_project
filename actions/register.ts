"use server"
import { connectDB } from "../lib/mongodb";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, name, username } = values
    try {
        await connectDB();
        const userFound = await User.findOne({ email: email })
        if (userFound) {
            return {
                error: "Email already exists"
            }
        }
        const usernameFound = await User.findOne({ username: username })
        if (usernameFound) {
            return {
                error: "Username already exists"
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email: email,
            name: name,
            username: username,
            password: hashedPassword,
        });
        const savedUser = await user.save();
            
    } catch (error) {
        console.log(error);
    }
}
