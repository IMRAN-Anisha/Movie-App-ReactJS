import React from "react";
import Search from "./components/search";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <main>
      <div className = "pattern" ></div>
      <div className = "wrapper" >
      <header>
        <img src = "./hero.png" alt = "Hero Banner"></img>
        <h1><span className = "text-gradient" >Find Movies You'll Enjoy </span></h1>
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App