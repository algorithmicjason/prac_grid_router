import './App.css';
import Home from "./components/Home"
import L1 from "./components/L1"
import L2 from "./components/L2"
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="homepage--level-titles">
      {/* <ol>
        <li><L1 /></li>
        <li><L2 /></li>
      </ol> */}
        <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
      Home
    </Link>
    <Link to="/Level1" style={{ padding: 5 }}>
      Level 1
    </Link>
    <Link to="/Level2" style={{ padding: 5 }}>
      Level 2
    </Link>
  </nav>
      <Routes>
        {/* nav would be good here */}
        <Route path='/' element={<Home />} />
        <Route path='/Level1' element={<L1 />} />
        <Route path='/Level2' element={<L2 />} />
      </Routes>
    </div>
  );
}

export default App;
