"use client";
import { User } from "@prisma/client";
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
   user: User;
   setUser: Dispatch<SetStateAction<User>>;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(
   undefined
);

export const GeneralProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [homeActiveTab, setHomeActiveTab] = useState<string>("");
   const [user, setUser] = useState<User | any>();

   return (
      <GeneralContext.Provider
         value={{ homeActiveTab, setHomeActiveTab, user, setUser }}
      >
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
