import { getServerSession } from "next-auth"

export default async function Profile() {
    const session = await getServerSession();
    return (
        <>
            Name
            {session?.user?.name ?
                (<div>{session?.user?.name}</div>) : (<div>not signed in</div>)
            }
        </>
    );
}