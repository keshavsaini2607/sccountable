"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import backgroundImage from "@/app/assets/background.jpg";

const LoginPage = () => {
   const { toast } = useToast();
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: FormEvent) => {
      setLoading(true);
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const email = (form.email as HTMLInputElement).value;
      const password = (form.password as HTMLInputElement).value;
      const result = await signIn("credentials", {
         redirect: false,
         email,
         password,
      });
      if (result?.error) {
         console.error(result.error);
         toast({
            title: result?.error,
         });
      } else {
         window.location.href = "/";
      }
      setLoading(false);
   };

   return (
      <div
         className="flex items-center justify-center h-screen bg-gray-100"
         style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
         <div className="flex w-full h-[90%] max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
            {/* Left Panel */}
            <div className="w-full md:w-1/2 p-8">
               <div className="text-center mb-6">
                  <h1 className="font-semibold text-3xl text-gray-800">
                     Welcome back!
                  </h1>
                  <p className="text-gray-600">
                     Enter to get unlimited access to data & information.
                  </p>
               </div>
               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-500"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Enter your mail address"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-500"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Enter password"
                     />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                     <label className="flex items-center text-sm text-gray-500">
                        <input
                           type="checkbox"
                           className="mr-2 text-primary focus:ring-primary"
                        />
                        Remember me
                     </label>
                     <Link href="#" className="text-sm text-primary">
                        Forgot your password?
                     </Link>
                  </div>
                  <Button
                     type="submit"
                     className="w-full p-3 text-white bg-primary rounded-md"
                     disabled={loading}
                  >
                     {loading && <Loader2 className="animate-spin mr-2" />}
                     {loading ? "Please wait..." : "Log In"}
                  </Button>
                  <div className="mt-6 text-center">
                     <p className="text-sm text-gray-500">Or, Login with</p>
                     <button
                        type="button"
                        className="mt-3 p-2 px-4 border rounded-md text-gray-600 border-gray-300 hover:border-primary hover:bg-gray-100"
                     >
                        Sign up with Google
                     </button>
                  </div>
                  <div className="mt-4 text-center">
                     <p className="text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link href="/auth/signup" className="text-primary">
                           Register here
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
            {/* Right Panel */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-700 items-center justify-center">
               <div className="text-white p-8">
                  <h2 className="text-3xl font-bold mb-4">
                     Welcome to{" "}
                     <span className="text-yellow-300">accountable.ai</span>
                  </h2>
                  <p className="text-lg">
                     Experience the world of modern accounting, powered by AI
                     insights.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
