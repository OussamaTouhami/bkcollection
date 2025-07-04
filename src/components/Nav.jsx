import { useState } from "react";
import { navData, logo } from "../websiteContent";

function Nav({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header {...props} style={{boxShadow: "0 0 10px #dedede"}} className="fixed top-0 w-full bg-white z-999 ">
      <nav className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="logo text-4xl font-[700] max-md:text-2xl">
          <a href={logo.logoHref}>
            <span className="text-[#ffbb00]">{logo.logoSpan}</span>
            {logo.logoName}
          </a>
        </div>

       
        <ul className="max-lg:hidden flex justify-center gap-4 font-[500]">
          {navData.map((link, index) => (
            <li key={index}>
              <a
                className="hover:text-[#ffbb00] transition ease-in-out duration-500"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="menuBtn hidden max-lg:block text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

    
      <div
        className={`fixed top-0 right-0 h-full w-3/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 font-[500]">
          {navData.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block hover:text-[#ffbb00] active:text-[#ffbb00] transition"
                onClick={() => setMenuOpen(false)} 
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

     
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 backdrop-blur-[15px] z-40"
        />
      )}
    </header>
  );
}

export default Nav;
