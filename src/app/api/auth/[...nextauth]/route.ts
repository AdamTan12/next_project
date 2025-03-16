import NextAuth from "next-auth";
import { Session, User, Account } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { SessionProvider } from "next-auth/react";

import { authOptions } from "../../../../../lib/auth";
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};