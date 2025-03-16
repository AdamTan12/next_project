import { getServerSession } from "next-auth"
import { connectDB } from "../lib/mongodb"
import User from "../models/User"

export default async function Profile() {
    const session = await getServerSession();
    
    try {
        await connectDB()
        const userFound = await User.findOne({ email: session?.user?.email })
        if (!userFound) {
            return {
                error: "sign in to view profile"
            }
        }
        else {
            return {
                name: userFound.name,
                email: userFound.email,
                password: userFound.password
            };
        }
        
    } catch (error) {
        console.log(error);
    }
}