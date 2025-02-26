import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
          <h1 className="text-xl font-bold">Mark Jackson</h1>
          <div>
            <Link className="px-4 hover:text-gray-400" to="/">Home</Link>
            <Link className="px-4 hover:text-gray-400" to="/about">About</Link>
            <Link className="px-4 hover:text-gray-400" to="/projects">Projects</Link>
            <Link className="px-4 hover:text-gray-400" to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
