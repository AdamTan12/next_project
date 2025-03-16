// app/api/getUser/route.js
import { connectDB } from "../../../../lib/mongodb"
import User from "../../../../models/User"

export async function GET(req: Request) {
    try {
        await connectDB();
        const users = await User.find().lean()
        const url = new URL(req.url);
        const age = url.searchParams.get("age");
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {

    }
}
  


  