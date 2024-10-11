import { redirect } from "next/navigation";
import React from "react";

const App = () => {
   redirect("/home");
   return <div></div>;
};

export default App;
