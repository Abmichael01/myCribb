import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navs = [
    { name: "Home", href: "#" },
  { name: "Bookings", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" }
]

const Navbar: React.FC = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>()
  return (
    <div className="flex p-5 px-5 sm:px-10 z-[999]">
      <div className="bg-[#fafafa] z-[11] rounded-3xl px-5 py-5 flex justify-between items-center w-full relative">
        <h2 className="font-fancy text-[#974b00] font-semibold text-lg">MyCribb</h2>
        <nav className="lg:block hidden">
            <ul className="flex gap-8">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <a href={nav.href} className="text-foreground/90 hover:text-primary font-medium text-sm">{nav.name}</a>
                </li>
              ))}
            </ul>
        </nav>
        <button className="rounded-sm lg:block hidden text-sm font-medium px-3 py-2 bg-primary text-white">Join Waitlist</button>

        <div 
        onClick={() => setIsOpen(prev => !prev)}
        className="bg-primary/30 px-2 py-2 lg:hidden rounded-xl cursor-pointer hover:bg-primary/20 transition-colors">
            {isOpen ? <X /> : <Menu /> }
        </div>

        <div
        className={`absolute top-[100%] left-0  overflow-hidden w-full rounded-3xl bg-white shadow-lg p-5 flex flex-col items-center gap-5 transition-transform duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navs.map((nav) => (
          <a
            key={nav.name}
            href={nav.href}
            className="text-foreground/90 hover:text-primary font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            {nav.name}
          </a>
        ))}
        {/* <Button onClick={() => setIsOpen(false)}>Join Waitlist</Button> */}
      </div>

      </div>
    </div>
  );
};

export default Navbar;
