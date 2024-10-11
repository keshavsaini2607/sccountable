import React from "react";

interface props {
   children: React.ReactNode;
}

const AuthLayout: React.FC<props> = ({ children }) => {
   return <div>{children}</div>;
};

export default AuthLayout;
