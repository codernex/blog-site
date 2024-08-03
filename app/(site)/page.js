'use client'
import Blog from "./components/home/blog";
import Event from "./components/home/event";
import HeroSection from "./components/home/hero";
import Journal from "./components/home/journal";
import SpotLight from "./components/home/spotlight";
import Team from "./components/home/team";

const Home = () => {
  return (
    <>
      <div >
        <HeroSection />
        <Blog />
        <Event />
        <Team />
        <SpotLight />
        <Journal />
      </div>
    </>
  );
};
export default Home;
