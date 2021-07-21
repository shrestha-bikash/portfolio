import './app.css';
import AboutSection from './components/abooutSection/About';
import IntroSection from './components/introSection/IntroSection';
import Navbar from './components/navbar/Navbar';
import SkillSection from './components/skillSection/SkillSection';
import ExperienceSection from './components/workExperienceSection/ExperienceSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-container">
        <IntroSection/>
        <AboutSection/>
        <SkillSection/>
        <ExperienceSection/>

      </div>
    </div>
  );
}

export default App;
