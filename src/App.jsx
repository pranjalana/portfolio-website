
import styles from './App.module.css';
import { Qualifications } from './components/Qualifications/Qualifications';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Qualifications />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
