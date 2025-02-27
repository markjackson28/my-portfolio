import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white" }}>
        {/* Navigation Bar */}
        <AppBar position="static" style={{ backgroundColor: "#1f1f1f" }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Mark Thanadabouth
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Toolbar>
        </AppBar>

        {/* Page Routes */}
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
