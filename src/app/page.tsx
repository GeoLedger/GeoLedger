

import Navbar from "./components/Navbar";
import Hero from "../app/pages/Hero"
import Community from "./pages/Community";

export default function Home() {
  return (
    <>

  <div className="hero-section">
    <Navbar />
    <Hero />
  </div>
  
  <div className="bg-white/50">
     <Community />
  </div>

    </>

  );
}