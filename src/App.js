import './App.css';
import Home from "./components/Home"
import Level1 from "./components/Level1"
import Level2 from "./components/Level2"
import Level3 from "./components/Level3"
import Level4 from "./components/Level4"
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <div style={{padding: "1rem"}}>
      <nav style={{padding: "2rem", background:"tan"}}>
        <Link to="/" style={{padding: "0.5rem"}} element={<Home />}>Home</Link>
        <Link to="/Level1" style={{padding: "0.5rem"}} element={<Level1 />}>Level 1</Link>
        <Link to="/Level2" style={{padding: "0.5rem"}} element={<Level2 />}>Level 2</Link>
        <Link to="/Level3" style={{padding: "0.5rem"}} element={<Level3 />}>Level 3</Link>
        <Link to="/Level4" style={{padding: "0.5rem"}} element={<Level4 />}>Level 4</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
        <Route path="/Level3" element={<Level3 />} />
        <Route path="/Level4" element={<Level4 />} />
        {/* this is what actually leads to correct module*/}


      </Routes>
    </div>
  );
}

export default App;
