import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { TfiDashboard } from "react-icons/tfi";

const SignupPage = () => {
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
               {"Let's get you started"}
            </span>
            <span className="text-sm text-gray-600">
               For managing your accounts the easiest way possible
            </span>

            <form className="mt-4">
               <div>
                  <label htmlFor="email" className="text-xs text-gray-500">
                     Name
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="w-full border rounded p-2"
                     placeholder="name"
                  />
               </div>
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
               <div className="mt-2">
                  <label
                     htmlFor="confirmPassword"
                     className="text-xs text-gray-500"
                  >
                     Confirm Password
                  </label>
                  <input
                     type="password"
                     name="confirmPassword"
                     id="confirmPassword"
                     className="w-full border rounded p-2"
                     placeholder="confirm password"
                  />
               </div>

               <br />
               <Button className="w-full text-white p-2">Login</Button>
               <div className="flex justify-center mt-2">
                  <Link href={'/auth/login'}>
                     <span className="text-sm text-primary">
                        Already an member? Login
                     </span>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignupPage;
