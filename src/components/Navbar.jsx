import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const sectionRefs = useRef({});

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      requestAnimationFrame(() => {
        activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
        activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
        activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
        activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
      });
    }
  };

  const navItems = [
    { label: "Ana Sayfa", link: "#home", className: "nav-link", external: false },
    { label: "Biz Kimiz", link: "#about", className: "nav-link", external: false },
    { label: "Kadromuz", link: "#kadromuz", className: "nav-link", external: false },
    { label: "Menümüz", link: "#cakes", className: "nav-link", external: false },
    { label: "Bize Ulaşın", link: "#contact", className: "nav-link", external: false },
    {
      label: "Dijital Menü",
      link: "https://online.pubhtml5.com/dltv/modp/",
      className: "nav-link text-[#e84242] font-semibold",
      external: true,
    },
  ];

  useEffect(() => {
    navItems.forEach(({ link, external }) => {
      if (!external) {
        const sectionId = link.substring(1);
        sectionRefs.current[sectionId] = document.getElementById(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    const updateSections = () => {
      navItems.forEach(({ link, external }) => {
        if (!external) {
          const sectionId = link.substring(1);
          const section = document.getElementById(sectionId);
          if (section) sectionRefs.current[sectionId] = section;
        }
      });
    };

    const handleIntersection = (entries) => {
      let mostVisibleSection = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          mostVisibleSection = entry.target;
          maxRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection) {
        const activeLink = document.querySelector(`a[href="#${mostVisibleSection.id}"]`);
        if (activeLink && lastActiveLink.current !== activeLink) {
          lastActiveLink.current?.classList.remove("active");
          activeLink.classList.add("active");
          lastActiveLink.current = activeLink;
          setTimeout(initActiveBox, 50);
        }
      }
    };

    updateSections();

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.3],
    });

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener("resize", initActiveBox);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event, external) => {
    if (external) return;

    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });

      document.querySelectorAll(".nav-link").forEach((link) =>
        link.classList.remove("active")
      );
      event.target.classList.add("active");
      lastActiveLink.current = event.target;
      setTimeout(initActiveBox, 50);
    }
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, external }, key) => (
        external ? (
          <a
            key={key}
            href={link}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ) : (
          <a
            key={key}
            href={link}
            className={className}
            onClick={(e) => activeCurrentLink(e, external)}
          >
            {label}
          </a>
        )
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
