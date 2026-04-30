import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import { HelmetProvider } from "react-helmet-async";
const Landing = lazy(() => import('./pages/Landing/Landing'));
const About = lazy(() => import('./pages/About/About'));
const Team = lazy(() => import('./pages/Team/Team'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Statute = lazy(() => import('./pages/Statute/Statute'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projekty" element={<Projects />} />
            <Route path="/o-fundacji" element={<About />} />
            <Route path="/zespol" element={<Team />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/statut" element={<Statute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
