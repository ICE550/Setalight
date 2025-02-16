import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componets/Benefits";
import Collaboration from "./componets/Collaboration";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Pricing from "./componets/Pricing";
import Roadmap from "./componets/Roadmap";
import Services from "./componets/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
