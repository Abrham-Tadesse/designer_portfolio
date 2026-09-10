import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    let observer;
    const frame = window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll("main section");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8%" },
      );

      sections.forEach((section) => {
        const isInFirstViewport = section.getBoundingClientRect().top < window.innerHeight;

        if (isInFirstViewport) {
          section.classList.add("is-visible");
        } else {
          observer.observe(section);
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar open={sidebarOpen} onToggle={setSidebarOpen} />
      <div className="flex items-start">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
