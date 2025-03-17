"use client"
import { useSession } from "next-auth/react";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";
import { notFound } from 'next/navigation';
import { useState, useEffect } from "react";

export default function Profile() {
    const { data: session, status } = useSession();
    const [ age, setAge ] = useState< | null>(null);
    const [ name, setName ] = useState<string>("")


    useEffect(() => {
        const setInfo = async() => {
            if (session?.user?.name) {
                setName(session?.user?.name);
            }
        }
        setInfo();
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const changeInfo = async() => {
        const res = await fetch(`/api/changeInfo?name=` + name, {method: 'PUT'});
    }
    return (
        <>
            Name <input type="text" value={name} onChange={(handleChange)}/>
            <button onClick={(changeInfo)}> change name </button>

            Email {session?.user?.email} <br/>
            
        </>
    );
}