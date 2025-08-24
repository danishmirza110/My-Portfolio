import { useState, Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components that are always visible normally
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoadingSpinner from './Components/LoadingSpinner';

// --- LAZY LOAD all components that will be switched ---
const Home = lazy(() => import('./Components/Home'));
const Projects = lazy(() => import('./Components/Projects'));
const About = lazy(() => import('./Components/About'));
const Skills = lazy(() => import('./Components/Skills'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  // This function decides which component to render
  const ContentToShow = () => {
    switch (selectedTab) {
      case "Home":
        return <Home setSelectedTab={setSelectedTab} />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <Home setSelectedTab={setSelectedTab} />;
    }
  };

  return (
    <>
      <Navbar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      {/* --- Wrap the dynamic content in Suspense --- */}
      <Suspense fallback={<LoadingSpinner />}>
        <ContentToShow />
      </Suspense>
      
      <Footer />
    </>
  );
}

export default App;