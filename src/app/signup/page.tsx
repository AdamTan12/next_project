"use client"
import { FormEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { register } from "../../../actions/register"

export default function Register() {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async(formData: FormData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
            username: formData.get("username")
        });
        ref.current?.reset();
        if (r?.error){
            setError(r.error);
            return;
        }
        else {
            return router.push("/signin")
        }
    };
    return(
        <section style={{ backgroundColor: "lightblue"}}>
            <form action={handleSubmit}>
                <label>Name</label>
                <input type="text" placeholder="full name" name="name"/>
                <label>Username</label>
                <input type="text" placeholder="username" name="username"/>
                <label>Email</label>
                <input type="email" placeholder="email" name="email"/>
                <label>Password</label>
                <input type="password" placeholder="password" name="password"/>
                <button>
                    Sign up
                </button>
            </form>
        </section>
    )
}
