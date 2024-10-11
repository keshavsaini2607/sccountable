import HomeNav from "@/components/shared/HomeNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";
import RootProvider from "../context";

interface Props {
   children: React.ReactNode;
}

const HommeLayout: React.FC<Props> = ({ children }) => {
   return (
      <RootProvider>
         <div className="flex h-screen">
            <div className="w-[17%] bg-primary h-full">
               <Sidebar />
            </div>
            <div className="w-[83%] flex flex-col">
               <HomeNav />
               <div className="flex-grow overflow-auto">{children}</div>
            </div>
         </div>
      </RootProvider>
   );
};

export default HommeLayout;
