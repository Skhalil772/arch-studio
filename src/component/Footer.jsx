import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="container mx-auto p-6 my-20 bg-gray-300">
      <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-8 md:justify-evenly justify-between items-center md:space-y-0 py-12 ">
        <Link className="text-8xl tracking-tight sm:text-5xl font-bold">
          Arch
        </Link>
        <Link to="/" className="text-4xl sm:text-2xl font-semibold">
          Home
        </Link>
        <Link to="/portfolio" className="text-4xl sm:text-2xl font-semibold">
          Portfolio
        </Link>
        <Link to="/about" className="text-4xl sm:text-2xl font-semibold">
          About us
        </Link>
        <Link to="/contact" className="text-4xl sm:text-2xl font-semibold">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
