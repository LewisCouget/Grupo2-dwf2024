import React from "react";
import "./global.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <>
      <HeaderNav />
      <Main />
    </>
  );
};

export default App;
