import { About } from "./sections/About";
import { Home } from "./sections/Home";
import { Portfolio } from "./sections/Portfolio";
export const Main: React.FC = () => {
  return (
    <main className="mx-[96px] my-20">
      <Home />
      <About />
      <Portfolio />      
    </main>
  );
};
