import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar({ open, onToggle }) {
  const navClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-[#202522]" : "text-[#69716b] hover:text-[#e7654b]"}`;

  return (
    <header className="relative z-50 border-b border-[#202522]/10 bg-[#f4f0e8]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-4">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2" aria-label="Toggle sidebar" aria-expanded={open} onClick={() => onToggle(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <Link to="/" className="text-lg font-black tracking-[-0.04em]" onClick={() => onToggle(false)}>
          FASIKAW®
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} className={navClass}>{label}</NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
