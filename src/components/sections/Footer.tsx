import { Icon } from "../Icon";
import githubSvg from "/src/assets/github.svg";
import linkedInSvg from "/src/assets/linkedin.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark">
      <section className="px-[96px] py-12">
        <div className="container">
          <div className="flex flex-wrap justify-around">
            <div>
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Navigation
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">Home</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">About</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="ml-12">
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Social Media
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">LinkedIn</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">Github</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-[40px] tracking-wider text-white">
                Let's Connect
              </h4>
              <Icon imageSrc={githubSvg} imageAlt="Github Icon"/>
              <Icon imageSrc={linkedInSvg} imageAlt="LinkedIn Icon"/>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
