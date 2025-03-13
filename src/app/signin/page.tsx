'use client'

import Image from "next/image";
import { signIn } from "next-auth/react"

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <button
        onClick={() => signIn("github")}
        className="bg-black text-white px-4 py-2 rounded"
      >
        sign in with gitHub
      </button>
    </main>
  );
}
