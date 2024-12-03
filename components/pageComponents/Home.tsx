"use client";
import { useGeneralContext } from "@/app/context/GeneralContext";
import OverviewPage from "@/app/home/overview/page";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const renderPageContent = (homeActiveTab: string) => {
   switch (homeActiveTab) {
      case "Overview":
         return <OverviewPage />;
   }
};

const Home = () => {
   const { homeActiveTab, setHomeActiveTab } = useGeneralContext();
   const router = useRouter();
   useEffect(() => {
      if (!homeActiveTab) {
         setHomeActiveTab("Overview");
         router.push("/home/overview");
      }
   }, []);
   return <div>{renderPageContent(homeActiveTab)}</div>;
};

export default Home;
