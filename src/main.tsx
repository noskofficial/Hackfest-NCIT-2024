import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./containers/navbar";
import { CalenderContextProvider } from "./Context/calender.context";

ReactDOM.createRoot(document.getElementById("body")!).render(
  <React.Fragment>
    <CalenderContextProvider>
      <NavBar />
    </CalenderContextProvider>
  </React.Fragment>
);
