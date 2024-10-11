import React from "react";
import { GeneralProvider } from "./GeneralContext";
import { AuthProvider } from "./AuthContext";

interface Props {
   children: React.ReactNode;
}

const RootProvider: React.FC<Props> = ({ children }) => {
   return (
      <GeneralProvider>
         <AuthProvider>{children}</AuthProvider>
      </GeneralProvider>
   );
};

export default RootProvider;
