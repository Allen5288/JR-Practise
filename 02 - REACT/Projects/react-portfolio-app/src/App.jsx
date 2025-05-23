import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import { Container } from "@mui/material";
import { Home } from "./pages/Home";
import About from "./pages/About"; // Changed from named import to default import
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProjectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // BrowserRouter is placed outside of the app to provide routing context
  // to all components in the app. This allows us to use routing features
  // like <Link> and <Route> in any component.
  return (
    <Router>
      <Container sx={{ mt: 4 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
