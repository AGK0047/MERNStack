import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home")), 2000);
  });
});

const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/About")), 3000);
  });
});

const Contact = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Contact")), 4000);
  });
});

const Demos = React.lazy(() => import("./components/Demos"));

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <div className="header">
        <h1>My Website</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/demos">Demos</Link>
        </div>
      </div>

      <div className="app-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Navigate</h3>
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/demos"><button>Demos</button></Link>
        </div>

        {/* Content Area */}
        <div className="main-content">
          <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demos" element={<Demos />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;