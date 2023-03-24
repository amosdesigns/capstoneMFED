import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <Header />
      <Nav/>
      <Main count={count} setCount={ setCount} />
      <Footer/>
    </div>
  );
}

export default App;
