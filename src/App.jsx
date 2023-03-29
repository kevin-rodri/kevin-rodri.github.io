import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import React from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;