// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="scroll-smooth">
      <section id="home"><Home /></section>
      <section id="about" className="scroll-mt-20"><About /></section>
      <section id="projects" className="scroll-mt-20"><Projects /></section>
      <section id="contact" className="px-8 pt-24 scroll-mt-20"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;