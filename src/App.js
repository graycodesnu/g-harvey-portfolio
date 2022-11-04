import './App.css';
import './index.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      {/* <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer /> */}
    </div>
  );
}

export default App;
