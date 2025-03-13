'use client'

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={ () => signOut() }>sign out</button>
            </>
        );
    }
    return (
        <Link href="/signin">
            Not signed in <br />
            <button>sign in</button>
        </Link>
    );
}
export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    );
}