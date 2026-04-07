import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DifferentiatorSection from './components/DifferentiatorSection'
import RoundsSection from './components/RoundsSection'
import AboutSection from './components/AboutSection'
import ItinerarySection from './components/ItinerarySection'
import SocialProofSection from './components/SocialProofSection'
import GallerySection from './components/GallerySection'
import WhyJoinSection from './components/WhyJoinSection'
import JudgesSection from './components/JudgesSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'

const REGISTRATION_OPEN = true;
const REGISTRATION_LINK = "https://forms.gle/d5ppeEUkdEg745bTA";
const INSTAGRAM_HANDLE = "@medicaps_awsc";

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar registrationOpen={REGISTRATION_OPEN} registrationLink={REGISTRATION_LINK} />
      <HeroSection registrationOpen={REGISTRATION_OPEN} registrationLink={REGISTRATION_LINK} />
      <DifferentiatorSection />
      <RoundsSection />
      <AboutSection />
      <ItinerarySection />
      <SocialProofSection />
      <GallerySection />
      <WhyJoinSection />
      <JudgesSection />
      <FAQSection />
      <Footer instagramHandle={INSTAGRAM_HANDLE} />
    </>
  )
}

export default App
