import "./style/main.css"
import "./style/layouts/header.css"
import "./style/layouts/footer.css"
import "./style/layouts/about-section.css"
import "./style/layouts/intro-section.css"
import "./style/layouts/projects-section.css"
import "./style/layouts/portfolio-section.css"
import "./style/layouts/skills-section.css"
import "./style/layouts/technology-section.css"
import "./style/layouts/contact-section.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    );
}

export default App;
 