"use server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
   // Get the session
   const session = req.cookies.get("next-auth.session-token");

   const url = req.nextUrl;

   // Unauthorized users trying to access / or /home/*
   if (!session && (url.pathname === "/" || url.pathname.startsWith("/home"))) {
      // Redirect unauthorized users to the sign-in page
      return NextResponse.redirect(new URL("/auth/signin", url));
   }

   // Authorized users trying to access /auth/*
   if (session && url.pathname.startsWith("/auth")) {
      // Redirect logged-in users to the home page
      return NextResponse.redirect(new URL("/home", url));
   }

   // Allow request if no issues
   return NextResponse.next();
}

// Paths to intercept
export const config = {
   matcher: ["/home/:path*", "/auth/:path*", "/"],
};
