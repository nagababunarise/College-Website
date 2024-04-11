import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import Title from "./Components/Title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />

        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
