import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import FeaturedWork from "../components/home/FeaturedWork";
import Services from "../components/home/Services";
import AboutStrip from "../components/home/AboutStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <Services />
      <AboutStrip />
    </>
  );
}
