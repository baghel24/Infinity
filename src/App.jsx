// import Button from "./components/Button";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
// import Section from "./components/Section";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {/* < Section/> */}
        <Hero/>
        <Benefits />
        <Collaboration/>
        <Services/>
        <Pricing/>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
