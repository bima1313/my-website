import { About } from "./sections/About";
import { Home } from "./sections/Home";
import { Portfolio } from "./sections/Portfolio";
export const Main: React.FC = () => {
  return (
    <main className="px-8 pt-[7.5rem] bg-linear-to-b overflow-x-scroll no-scrollbar from-slate-100 to-slate-600 lg:px-16 lg:pt-[9.5rem] xl:px-[96px] xl:pt-44 xl:pb-20">
      <Home />
      <About />
      <Portfolio />
    </main>
  );
};
