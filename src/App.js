import './App.css';
import Home from "./components/Home"
import Level1 from "./components/Level1"
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <div style={{padding: "1rem"}}>
      <nav style={{padding: "2rem", background:"tan"}}>
        <Link to="/" style={{padding: "0.5rem"}} element={<Home />}>Home</Link>
        <Link to="/Level1" style={{padding: "0.5rem"}} element={<Level1 />}>Level 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Level1" element={<Level1 />} />

      </Routes>
    </div>
  );
}

export default App;
