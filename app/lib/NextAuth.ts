import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
const prismaClient = new PrismaClient();

export const NEXT_AUTH_PROVIDERS = {
   providers: [
      CredentialsProvider({
         name: "Email",
         credentials: {
            email: { label: "Email", type: "text", placeholder: "email" },
            password: {
               label: "Password",
               type: "password",
               placeholder: "password",
            },
         },
         async authorize(credentials: any) {
            try {
               const { email, password } = credentials;

               // Validate that email and password are provided
               if (!email || !password) {
                  throw new Error("Both email and password are required.");
               }

               // Find the user by email in the database
               const user = await prismaClient.user.findFirst({
                  where: { email },
               });

               // Throw an error if the user is not found
               if (!user) {
                  throw new Error("Invalid email or password."); // Generic error to prevent user enumeration
               }

               // Compare the provided password with the stored hashed password
               const isPasswordValid = await bcrypt.compare(
                  password,
                  user.password!
               );
               if (!isPasswordValid) {
                  throw new Error("Invalid email or password."); // Same generic error for invalid credentials
               }

               // Remove sensitive data (e.g., password) from the user object
               const { password: _, ...userWithoutPassword } = user;

               // Return the sanitized user object
               return userWithoutPassword;
            } catch (error: any) {
               // Log the error for debugging (in production, limit details in logs)
               console.error("Authorization error:", error.message);

               // Re-throw the error for handling in the calling code or framework
               throw new Error(
                  error.message ||
                     "An unknown error occurred during authorization."
               );
            }
         },
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   callbacks: {
      session: ({ session, token }: any) => {
         if (session && session.user) {
            console.log({ token });
            session.user.id = token.sub;
            session.user.password = token.password;
         }

         return session;
      },
   },
   pages: {
      signIn: "/auth/login",
   },
};
