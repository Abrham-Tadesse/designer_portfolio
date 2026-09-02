import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-black" : "text-neutral-500 hover:text-black"}`;

  return (
    <header className="relative z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="text-lg font-black tracking-[-0.04em]" onClick={() => setOpen(false)}>
          NORA®
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} className={navClass}>{label}</NavLink>
          ))}
        </nav>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 top-20 w-full border-b border-black/10 bg-[#f5f3ee] px-5 py-8 md:hidden">
          <div className="flex flex-col gap-5 text-3xl display-font">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} className={navClass} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
