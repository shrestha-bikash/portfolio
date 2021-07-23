import './app.css';
import AboutSection from './components/abooutSection/About';
import Footer from './components/footer/Footer';
import IntroSection from './components/introSection/IntroSection';
import Navbar from './components/navbar/Navbar';
import QualificationSection from './components/qualificationSection/QualificationSection';
import SkillSection from './components/skillSection/SkillSection';
import AwardSection from './components/workExperienceSection/AwardSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-container">
        <IntroSection/>
        <AboutSection/>
        <SkillSection/>
        <QualificationSection/>
        <AwardSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
