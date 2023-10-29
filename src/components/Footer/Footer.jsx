import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#151515] text-white grid   md:grid-cols-4 md:justify-items-center">
        <aside>
          <div>
            <img src="/public/logo.svg" alt="" />
          </div>

          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <header className=" text-white text-lg">About</header>
          <NavLink className="link link-hover">Home</NavLink>
          <NavLink className="link link-hover">Service</NavLink>
          <NavLink className="link link-hover">Contact</NavLink>
        </nav>
        <nav>
          <header className="text-white text-lg">Company</header>
          <NavLink className="link link-hover">Why Car doctor</NavLink>
          <NavLink className="link link-hover">About</NavLink>
        </nav>
        <nav>
          <header className="text-white text-lg">Support</header>
          <NavLink className="link link-hover">Support Center</NavLink>
          <NavLink className="link link-hover">Feedback</NavLink>
          <NavLink className="link link-hover">Accesbility</NavLink>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
