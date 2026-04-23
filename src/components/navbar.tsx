import { useState, useEffect } from "react";

interface NavLink {
  name: string;
  id: string;
}

const LINKS: NavLink[] = [
  { name: "home", id: "home" },
  { name: "about me", id: "about" },
  { name: "projects", id: "projects" },
  { name: "contact me", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center justify-center
        w-fit h-[7vh] px-2
        bg-[#E0E1DD]/10 backdrop-blur-[20px]
        rounded-full border border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        transition-all duration-300
        ${scrolled ? "top-[1vh] bg-[#E0E1DD]/20" : "top-[2vh]"}
      `}
    >
      <ul className="flex flex-row items-center justify-center gap-[10px] list-none m-0 p-0">
        {LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={`#${link.id}`}
              className={`
                inline-flex items-center justify-center text-center
                px-6 py-2 rounded-full text-sm font-medium
                whitespace-nowrap no-underline leading-none
                transition-all duration-200
                ${
                  active === link.id
                    ? "bg-[#1B263B] text-[#E0E1DD]"
                    : "bg-transparent text-[#1B263B] hover:bg-[#1B263B]/10"
                }
              `}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;