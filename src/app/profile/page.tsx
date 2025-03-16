import { getServerSession } from "next-auth"
import { connectDB } from "../../../lib/mongodb"
import User from "../../../models/User"
import { notFound } from 'next/navigation';

export default async function Profile() {
    const session = await getServerSession();

    notFound();
    // return (
    //     <>
    //         Name
    //         {session?.user?.name ?
    //             (<div>{session?.user?.email}</div>) : (<div>not signed in</div>)
    //         }
    //     </>
    // );
}