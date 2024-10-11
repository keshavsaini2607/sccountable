"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useGeneralContext } from "@/app/context/GeneralContext";
import OverviewPage from "@/app/home/overview/page";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const renderPageContent = (homeActiveTab: string) => {
   switch (homeActiveTab) {
      case "Overview":
         return <OverviewPage />;
   }
};

const Home = () => {
   const { isAuthenticated } = useAuth();
   console.log({ isAuthenticated });
   const { homeActiveTab, setHomeActiveTab } = useGeneralContext();
   const router = useRouter();

   useEffect(() => {
      if (!isAuthenticated) router.replace("/auth/login");
      if (!homeActiveTab) {
         setHomeActiveTab("Overview");
         router.push("/home/overview");
      }
   }, []);
   return <div>{renderPageContent(homeActiveTab)}</div>;
};

export default Home;
