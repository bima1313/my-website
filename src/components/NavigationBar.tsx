interface props {
  navRef: React.RefObject<HTMLInputElement | null>;
}
export const NavigationBar: React.FC<props> = ({ navRef }) => {
  return (
    <nav
      ref={navRef}
      className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:rounded-none lg:shadow-none"
    >
      <ul className="block lg:flex">
        <li className="group">
          <a
            href=""
            className="text-dark py-2 mx-8 flex group-hover:text-primary font-poppins tracking-wide"
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href=""
            className="text-dark py-2 mx-8 flex group-hover:text-primary font-poppins tracking-wide"
          >
            About
          </a>
        </li>
        <li className="group">
          <a
            href=""
            className="text-dark py-2 mx-8 flex group-hover:text-primary font-poppins tracking-wide"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
};
