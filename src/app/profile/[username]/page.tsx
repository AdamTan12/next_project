import { use } from "react"
import { connectDB } from "../../../../lib/mongodb"
import User from "../../../../models/User"
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { username: string } }) {
    const { username } = await params;
    try {
        await connectDB()
        const usernameFound = await User.findOne({ username: username })
        if (usernameFound) {
            return (
                <div style={{backgroundColor: "lightblue"}}>
                    <label>Username: </label> <>{ username }</> <br/>
                    <label>Email: </label> <>{ usernameFound.email }</> <br/>
                    <label>Name: </label> <>{ usernameFound.name }</>
                </div>
            );
        }
    } catch(error) {
        console.log(error)
    }
    notFound();
}