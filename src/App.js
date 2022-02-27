import './App.css';
import Home from "./components/Home"
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <div>

    <Link to="/" element={<Home />}/>


      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
