import React from "react";
import { GeneralProvider } from "./GeneralContext";

interface props {
   children: React.ReactNode;
}

const RootProvider: React.FC<props> = ({ children }) => {
   return (
      <>
         <GeneralProvider>{children}</GeneralProvider>
      </>
   );
};

export default RootProvider;
