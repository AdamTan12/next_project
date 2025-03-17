import { connectDB } from "../../../../lib/mongodb"
import User from "../../../../models/User"
import { getServerSession } from "next-auth"

export async function PUT(req: Request) {
    try {
        await connectDB();
        const session = await getServerSession()
        const url = new URL(req.url);
        const name = url.searchParams.get("name");
        //console.log(name);
        await User.updateOne({email: session?.user?.email}, {$set:{name: name}})
        return new Response(JSON.stringify(name), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.log(error);
    }
}