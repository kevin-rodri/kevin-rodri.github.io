import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router >
        <Navigation />
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
          <Route path="/projects"  element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
