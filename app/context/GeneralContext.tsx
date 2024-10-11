"use client";
import React, {
   createContext,
   useState,
   ReactNode,
   Dispatch,
   SetStateAction,
   useContext,
} from "react";

interface GeneralContextType {
   homeActiveTab: string;
   setHomeActiveTab: Dispatch<SetStateAction<string>>;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(
   undefined
);

export const GeneralProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [homeActiveTab, setHomeActiveTab] = useState<string>("");

   return (
      <GeneralContext.Provider value={{ homeActiveTab, setHomeActiveTab }}>
         {children}
      </GeneralContext.Provider>
   );
};

export const useGeneralContext = () => {
   const context = useContext(GeneralContext);

   if (!context) {
      throw new Error(
         "useGeneralContext must be used within a GeneralProvider"
      );
   }

   return context;
};
