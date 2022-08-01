import About from "layouts/About";
import Explain from "layouts/Explain";
import Hero from "layouts/Hero";
import LetsStartChoosing from "layouts/LetsStartChoosing";
import Slider from "layouts/Slider";

function App() {
  return (
    <div>
      <div className="mb-[100px]">
        <Hero />
      </div>
      <div className="mb-[100px]" id="explaination">
        <About />
      </div>
      <div className="mb-[100px] xl:mb-[200px]" id="buy">
        <Explain />
      </div>
      <div className="mb-[100px]">
        <LetsStartChoosing />
      </div>
    </div>
  );
}

export default App;
