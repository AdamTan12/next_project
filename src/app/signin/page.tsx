'use client'
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignInPage() {
  
    const [error, setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        if (res?.error) {
            setError(res.error as string)
            alert("error: " + res.error)
        }
        else {
            return router.push("/");
        }
    }
    return (
        <section style={{ backgroundColor: "lightblue" }}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="email" name="email">
                </input>
                <label>Password</label>
                <input type="password" placeholder="password" name="password">
                </input>
                <button type="submit">
                    sign in
                </button>
            </form>
        </section>
    )
}
