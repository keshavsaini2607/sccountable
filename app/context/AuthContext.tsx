"use client";

import React, {
   createContext,
   useState,
   ReactNode,
   useContext,
   useEffect,
} from "react";

interface AuthContextType {
   isAuthenticated: boolean;
   login: (token: string) => void;
   logout: () => void;
   userToken: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
   const [userToken, setUserToken] = useState<string | null>(null);

   const login = (token: string) => {
      setIsAuthenticated(true);
      setUserToken(token);
      localStorage.setItem("authToken", token);
   };

   const logout = () => {
      setIsAuthenticated(false);
      setUserToken(null);
      localStorage.removeItem("authToken");
   };

   useEffect(() => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
         setIsAuthenticated(false);
         setUserToken(storedToken);
      }
   }, []);

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, login, logout, userToken }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);
   if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
};
