import React from "react";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  return (
    <div>
      {/* <section style={{ position: "fixed", width: "100%" }}>
      </section> */}
      <NavigationBar />
      <section className="bottom">
        <SideBar className="Sside" />
        <Main className="Bside" />
      </section>
    </div>
  );
}

export default App;
