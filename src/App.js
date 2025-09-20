import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/Hero-Section/HeroSection';
import StudentTrusted from './components/Student-Trusted/StudentTrusted';
import UniversitySection from './components/Choose-University/UniversitySection';
import WhyChooseSection from './components/Why-Choose/WhyChooseSection';
import BottomSection from './components/Bottom-Section/BottomSection';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';

// Import placeholder components for routing pages
import Home from './pages/Home';
import Events from './pages/Events';
import Groups from './pages/Groups';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <Home/>
        } />

        {/* Other routes */}
        <Route path="/events" element={<Events />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
