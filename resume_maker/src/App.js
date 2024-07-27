import './App.css';
import Hero from './components/hero/Hero';
import HeroImage from './imageUtils/resumeImgHero.png'
function App() {
  return (
    <div className='df'>
      <Hero />
      <img src={HeroImage} style={{ height: 650, width: 600 }} alt={"Reume template"}/>
    </div>
  );
}

export default App;
