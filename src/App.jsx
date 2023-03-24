import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutSection from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import React from "react";
import Photo from './components/Photo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutSection />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;