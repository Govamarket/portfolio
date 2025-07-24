import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Define other routes here */}
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      {/* Other components can be added here */}
    </Router>
  );
}

export default App;
