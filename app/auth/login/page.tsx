import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { TfiDashboard } from "react-icons/tfi";

const LoginPage = () => {
   return (
      <div className="flex items-center justify-center h-screen">
         <div className="w-full p-4 flex flex-col md:w-[40%] md:shadow-sm md:border rounded">
            <div className="flex items-center md:justify-center md:mb-4 gap-2 mb-2">
               <TfiDashboard size={30} className="text-secondary" />
               <h1 className="font-semibold text-xl md:text-2xl text-gray-700">
                  accoun<span className="text-secondary">table</span>
               </h1>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
               Welcome Back
            </span>
            <span className="text-sm text-gray-600">
               To the world of effective accounting
            </span>

            <form className="mt-4">
               <div>
                  <label htmlFor="email" className="text-xs text-gray-500">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     className="w-full border rounded p-2"
                     placeholder="email"
                  />
               </div>
               <div className="mt-2">
                  <label htmlFor="password" className="text-xs text-gray-500">
                     Password
                  </label>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     className="w-full border rounded p-2"
                     placeholder="password"
                  />
               </div>
               <div className="flex justify-end mt-1">
                  <span className="text-sm text-primary">Forgot Password?</span>
               </div>
               <br />
               <Button className="w-full text-white p-2">Login</Button>
               <div className="flex justify-center mt-2">
                  <Link href={'/auth/signup'}>
                     <span className="text-sm text-primary">
                        New here? Signup
                     </span>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LoginPage;
