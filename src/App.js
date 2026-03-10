import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Team from './pages/Team/Team';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="MainContent">
        <Routes>
          <Route path="/o-fundacji" element={<About />} />
          <Route path="Nasz-zespół" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
