import { NEXT_AUTH_PROVIDERS } from "@/app/lib/NextAuth";
import NextAuth from "next-auth/next";


const handler = NextAuth(NEXT_AUTH_PROVIDERS);

export const GET = handler;
export const POST = handler;
