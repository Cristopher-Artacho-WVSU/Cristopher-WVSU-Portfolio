import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navContent = [
    { webPage: "Home", id: "home" },
    { webPage: "Projects", id: "projects" },
    { webPage: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setOpen(false); // close mobile menu
};

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="
          md:w-[98vw]
          fixed top-0 left-0 z-30
          md:absolute
          
          lg:text-lg_navbar
          md:text-md_navbar
          md:h-[6rem] md:px-[4rem] md:py-[2rem]
          flex items-center justify-between
          font-inter text-font_white font-light bg-misc
        "
      >
        {/* NAME */}
        <p className="hidden md:block font-light ">
          Cristopher Ian Artacho
        </p>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center">
          {navContent.map((page, index) => (
            <button
              key={page.webPage}
              onClick={() => scrollToSection(page.id)}
              className={`lg:px-[4vw] lg:h-[4rem] md:px-[3vw] md:h-[3rem] flex items-center ${
                index === navContent.length - 1 &&
                "lg:ml-[5rem] md:ml-[3rem] bg-highlight text-misc font-bold"
              }`}
            >
               <span className="relative group inline-block cursor-pointer">
                {page.webPage}
                <span
                  className={`block w-0 md:h-[0.01rem] transition-all duration-300 group-hover:w-full ${
                    index === navContent.length - 1
                      ? "bg-black"
                      : "bg-white"
                  }`}
                />
                </span>
            </button>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
  onClick={() => setOpen(!open)}
  className="md:hidden fixed top-4 right-4 text-white z-50"
>
  {open ? <X size={28} /> : <Menu size={28} />}
</button>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[75%] bg-black z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >

        {/* CONTENT */}
        <div className="pt-[5rem] px-[2rem]">
          {/* NAME */}
          <p className="font-inter text-font_white text-lg_heading3 mb-[2rem]">
            Cristopher Ian Artacho
          </p>

          {/* MENU LIST */}
          <div className="flex flex-col gap-[1.5rem]">
            {navContent.map((page) => (
              <button
                key={page.webPage}
                onClick={() => scrollToSection(page.id)}
                className="text-font_white text-lg_content font-inter self-start"
              >
                {page.webPage}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
