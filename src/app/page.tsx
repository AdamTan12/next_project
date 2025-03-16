"use client"
import { getServerSession } from "next-auth"
import { useSearchParams, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { UserDocument } from "../../models/User";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState<UserDocument[]>([]);
  const [error, setError] = useState(null);
  const [age, setAge] = useState<number | string>("all");

  const fetchUsers = async() => {
    try {
      const res = await fetch(`/api/getUser?age=` + age);
      if (!res.ok) {
        throw new Error("failed to fetch users");
      }
      const data = await res.json();
      setUsers(data);
      console.log(data);
      //console.log(users);
    } catch(err) {
      //setError(err.message);
    } 
  }



  useEffect(() => {
    console.log(users); // This will log the updated `users` after state change
  }, [users]);

  return (
    <div>
      <section>
        <form onSubmit={(e) => e.preventDefault() }>
          <label>Age: </label>
          <input type="number" step="1" min="0"
            value = {age}
            onChange={e => setAge(Number(e.target.value))}
          />
          <button onClick={() => fetchUsers()}>
            search
          </button>
        </form>
      </section>
      <div>
        {
          users.map((user, index) => (
            <li key={index}>
              <Link href={`/profile/${user.username}`}>{user.username}</Link>
            </li>
          ))
        }
      </div>
    </div>
  );
}
