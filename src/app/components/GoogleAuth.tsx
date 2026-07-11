"use client"

// import { signIn } from "@/auth"
import { signIn } from "next-auth/react"


export default function SignIn() {
    return (
        <button className="w-full border border-white/30 p-2 rounded hover:bg-white/10" onClick={() => signIn("google")}>
            Sign in with Google
        </button>
    )
} 