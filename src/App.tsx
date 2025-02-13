// App.tsx
import  { useRef } from 'react';
import AppBar from './Components/Navbar/Appbar'; // Your AppBar component file
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects'

function App() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the respective section
  const scrollToSection = (section: string) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pass the scroll function to the AppBar */}
      <AppBar onNavigate={scrollToSection} />

      {/* Spacer for the fixed AppBar */}
      <div style={{ marginTop: '64px' }}>
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
