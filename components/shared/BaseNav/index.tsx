"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { TfiDashboard } from "react-icons/tfi";

const BaseNav = () => {
   return (
      <nav className="p-4 flex items-center justify-between">
         <div className="flex items-center gap-2 mb-4">
            <TfiDashboard size={30} className="text-secondary" />
            <h1 className="font-semibold text-xl text-gray-700">
               accoun<span className="text-secondary">table</span>
            </h1>
         </div>
         <Link href={"/auth/login"}>
            <Button className="bg-primary text-white">Get Started</Button>
         </Link>
      </nav>
   );
};

export default BaseNav;
