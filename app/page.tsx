import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

const App = async () => {
   redirect("/home");
   return <div></div>;
};

export default App;
