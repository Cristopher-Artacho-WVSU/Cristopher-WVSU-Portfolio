import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const Navbar = () => {
  // TOGGLE THEME
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;

    // 1️⃣ Check saved preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      // 2️⃣ Fallback: system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");

    const isNowDark = root.classList.contains("dark");
    setIsDark(isNowDark);

    // Persist preference
    localStorage.setItem("theme", isNowDark ? "dark" : "light");
  };

  // NAVBAR
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
          font-inter text-font font-light bg-misc
        "
      >
        {/* NAME */}
        <div className="hidden md:flex gap-[2rem]">
          <p className="font-light ">Cristopher Ian Artacho</p>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              bg-misc text-font
              hover:opacity-80 transition-all duration-300 flex rounded-full
            "
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

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
                    index === navContent.length - 1 ? "bg-black" : "bg-white"
                  }`}
                />
              </span>
            </button>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden fixed top-4 right-4 z-50 text-font"
        >
          {!open && <Menu size={28} />}
        </button>
      </nav>

      {/* Portal for mobile X button */}
      {open &&
        createPortal(
          <button
            onClick={() => setOpen(false)}
            className="fixed top-4 right-4 z-[9999] text-font md:hidden bg-misc p-1 rounded-full shadow-md"
          >
            <X size={28} />
          </button>,
          document.body
        )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[50%] z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* CONTENT */}
        <div className="pt-[5rem] px-[2rem]">
          {/* NAME */}
          <motion.div
            className="flex items-center justify-between w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm_heading3 font-light text-font font-inter whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Cristopher Ian Artacho
            </motion.p>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="bg-misc text-font hover:opacity-80 transition-all duration-300 flex rounded-full p-1"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </motion.div>
          {/* MENU LIST */}
          <div className="flex flex-col gap-[1.5rem] pt-[2rem]">
            {navContent.map((page) => (
              <button
                key={page.webPage}
                onClick={() => scrollToSection(page.id)}
                className="text-font text-lg_content font-inter self-start"
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
