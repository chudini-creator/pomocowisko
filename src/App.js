import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="MainContent">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projekty" element={<Projects />} />
          <Route path="/o-fundacji" element={<About />} />
          <Route path="/zespół" element={<Team />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
