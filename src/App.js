import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Quiz from './pages/quiz.jsx';
import Result from './pages/result.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;