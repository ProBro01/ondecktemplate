import "./stylesheets/App.css"
import { Navbar } from "./components/Navbar.jsx"
import { Main } from "./components/Main.jsx"
import { Footer } from "./components/Footer.jsx"
import { Card } from "./components/Card";
import { useState } from "react"

function App() {

  const [card, showcard] = useState(true)

  return (
    <div className="container">
      <Navbar />
      {card ? <Card closefunc={showcard}/> : null}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
