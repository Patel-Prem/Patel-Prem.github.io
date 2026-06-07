import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAVBAR_OFFSET = 120;

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================
     HEADER BACKGROUND ON SCROLL
  ========================== */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================
     ACTIVE SECTION (BULLETPROOF)
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAVBAR_OFFSET;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (!section) continue;

        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial sync

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     SMOOTH SCROLL HANDLER
  ========================== */
  // const scrollToSection = (e, href) => {
  //   e.preventDefault();
  //   const element = document.querySelector(href);
  //   // console.log("ELEment:", element)

  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     setIsMobileMenuOpen(false);
  //   }
  // };

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (!element) return;

    // const navbarHeight = document.getElementById("navbar")?.offsetHeight || 80;
    const navbarHeight = 50;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      10; // small gap

    // Close menu FIRST (important for mobile)
    setIsMobileMenuOpen(false);

    // Delay scroll until menu animation starts
    setTimeout(() => {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <a href="#home" className="text-2xl font-bold text-primary">
            {"<Prem/>"}
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative inline-block text-sm font-medium transition-colors ${
                    activeSection === sectionId
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}

                  {/* SMOOTH SLIDING UNDERLINE */}
                  {activeSection === sectionId && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover-elevate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div
                className="px-4 py-4 space-y-3  max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto"
              >
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block py-2 text-base transition-colors ${
                        activeSection === sectionId
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
