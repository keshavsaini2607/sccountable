"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import backgroundImage from "@/app/assets/background.jpg";

const SignupPage = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const { toast } = useToast();
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const registerUser = async (data: any) => {
      setLoading(true);
      console.log({ data });
      delete data.confirmPassword;
      data.authProvider = "email";
      try {
         const response = await axios.post("/api/user/create", data);
         if (response && response.data) {
            router.replace("/auth/signin");
            toast({
               title: "Account created successfully",
               description:
                  "Please login and verify your email to access the dashboard.",
            });
         }
      } catch (error) {
         toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
         });
      } finally {
         setLoading(false);
      }
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
                     Create your account
                  </h1>
                  <p className="text-gray-600">
                     Join us for a seamless accounting experience.
                  </p>
               </div>
               <form onSubmit={handleSubmit(registerUser)}>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label
                           htmlFor="firstName"
                           className="text-sm text-gray-500"
                        >
                           First Name
                        </label>
                        <input
                           type="text"
                           id="firstName"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                           placeholder="First Name"
                           {...register("firstName", {
                              required: "First name is required",
                           })}
                        />
                        {errors.firstName && (
                           <span className="text-xs text-red-500">
                              {errors.firstName.message}
                           </span>
                        )}
                     </div>
                     <div>
                        <label
                           htmlFor="lastName"
                           className="text-sm text-gray-500"
                        >
                           Last Name
                        </label>
                        <input
                           type="text"
                           id="lastName"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                           placeholder="Last Name"
                           {...register("lastName", {
                              required: "Last name is required",
                           })}
                        />
                        {errors.lastName && (
                           <span className="text-xs text-red-500">
                              {errors.lastName.message}
                           </span>
                        )}
                     </div>
                  </div>
                  <div className="mt-4">
                     <label htmlFor="email" className="text-sm text-gray-500">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Email"
                        {...register("email", {
                           required: "Email is required",
                           pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Please enter a valid email",
                           },
                        })}
                     />
                     {errors.email && (
                        <span className="text-xs text-red-500">
                           {errors.email.message}
                        </span>
                     )}
                  </div>
                  <div className="mt-4">
                     <label
                        htmlFor="password"
                        className="text-sm text-gray-500"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Password"
                        {...register("password", {
                           required: "Password is required",
                           minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                           },
                        })}
                     />
                     {errors.password && (
                        <span className="text-xs text-red-500">
                           {errors.password.message}
                        </span>
                     )}
                  </div>
                  <div className="mt-4">
                     <label
                        htmlFor="confirmPassword"
                        className="text-sm text-gray-500"
                     >
                        Confirm Password
                     </label>
                     <input
                        type="password"
                        id="confirmPassword"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                           required: "Confirm password is required",
                           validate: (value) =>
                              value === watch("password") ||
                              "Passwords do not match",
                        })}
                     />
                     {errors.confirmPassword && (
                        <span className="text-xs text-red-500">
                           {errors.confirmPassword.message}
                        </span>
                     )}
                  </div>
                  <Button
                     className="w-full mt-6 p-3 text-white bg-primary rounded-md"
                     disabled={loading}
                  >
                     {loading && <Loader2 className="animate-spin mr-2" />}
                     {loading ? "Please wait..." : "Sign Up"}
                  </Button>
                  <div className="mt-4 text-center">
                     <p className="text-sm text-gray-600">
                        Already a member?{" "}
                        <Link href="/auth/signin" className="text-primary">
                           Login here
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
            {/* Right Panel */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 items-center justify-center">
               <div className="text-white p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                     Welcome to{" "}
                     <span className="text-yellow-300">accountable.ai</span>
                  </h2>
                  <p className="text-lg">
                     Simplify your accounting with our powerful tools.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignupPage;
