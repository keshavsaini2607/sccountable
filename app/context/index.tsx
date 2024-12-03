"use client";
import React from "react";
import { GeneralProvider } from "./GeneralContext";
import { AuthProvider } from "./AuthContext";
import { SessionProvider } from "next-auth/react";

interface Props {
   children: React.ReactNode;
}

const RootProvider: React.FC<Props> = ({ children }) => {
   return (
      <SessionProvider>
         <GeneralProvider>
            <AuthProvider>{children}</AuthProvider>
         </GeneralProvider>
      </SessionProvider>
   );
};

export default RootProvider;
