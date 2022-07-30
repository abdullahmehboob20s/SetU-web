import About from "layouts/About";
import Explain from "layouts/Explain";
import Hero from "layouts/Hero";
import LetsStartChoosing from "layouts/LetsStartChoosing";
import Slider from "layouts/Slider";

function App() {
  return (
    <div>
      <div className="mb-[1rem]">
        <Hero />
      </div>
      <div className="mb-[100px]">
        <Slider />
      </div>
      <div className="mb-[100px]">
        <About />
      </div>
      <div className="mb-[100px]">
        <Explain />
      </div>
      <div className="mb-[100px]">
        <LetsStartChoosing />
      </div>
    </div>
  );
}

export default App;
