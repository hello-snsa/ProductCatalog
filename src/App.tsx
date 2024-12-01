import React from "react";

import './App.css'
import Navbar from "./layouts/Navbar";
import Routing from "./routes/Routing";
import Footer from "./layouts/Footer";

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className="route-container">
        <Routing />
      </div>
      <Footer />
    </>
  );
};

export default App;
