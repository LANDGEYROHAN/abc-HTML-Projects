
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ExplorePets from './ExplorePets';
import PetDetails from './PetDetails';

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h2>🐾 PawMart</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore Pets</Link>
          <a href="#">Breeds</a>
          <a href="#">About</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      <Routes>

        <Route path="/" element={<ExplorePets />} />

        <Route path="/explore" element={<ExplorePets />} />

        <Route path="/pet/:id" element={<PetDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
