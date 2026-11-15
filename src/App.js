import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import TechnicalSkill from './components/TechnicalSkill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <About />
        <Projects />
        <TechnicalSkill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
