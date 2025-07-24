import Hero from './components/Hero';
import Projects from './components/Projects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import OurTeam from './components/OurTeam.jsx';
import ContactUs from './components/ContactUs.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Header/>
      <Hero/>
      <WhyChooseUs/>
      <Projects/>
      <OurTeam/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;