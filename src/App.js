import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import ReadPage from './ReadPage';
import InterestPage from './InterestPage';

function NavBar() {
  const navItemsRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37 || event.keyCode === 39) {
        event.preventDefault();

        const currentNavItemIndex = navItemsRef.current.findIndex((item) => item === document.activeElement);
        const nextNavItemIndex =
          event.keyCode === 37
            ? (currentNavItemIndex - 1 + navItemsRef.current.length) % navItemsRef.current.length
            : (currentNavItemIndex + 1) % navItemsRef.current.length;

        navItemsRef.current[nextNavItemIndex].focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/" ref={(el) => (navItemsRef.current[0] = el)}>Home</Link>
        </li>
        <li>
          <Link to="/read-page" ref={(el) => (navItemsRef.current[1] = el)}>Read Page</Link>
        </li>

        <li>
          <Link to="/interest-page" ref={(el) => (navItemsRef.current[2] = el)}>Interest Page</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}

function App() {
  return ( 
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/read-page" element={<ReadPage />} />
          <Route path="/interest-page" element={<InterestPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
