import About from "layouts/About";
import Explain from "layouts/Explain";
import Hero from "layouts/Hero";
import LetsStartChoosing from "layouts/LetsStartChoosing";

function App() {
  return (
    <div>
      <div className="lg:mb-[1rem]">
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
