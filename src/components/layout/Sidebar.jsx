import { NavLink } from "react-router-dom";
import { ArrowUpRight, Circle } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <button
        type="button"
        aria-label="Close sidebar"
        className={`fixed inset-0 top-20 z-40 bg-[#202522]/25 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      <aside className={`fixed bottom-0 left-0 top-20 z-50 flex w-64 shrink-0 flex-col justify-between border-r border-[#202522]/10 bg-[#f4f0e8] px-7 py-8 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div>
        <div className="mb-20 flex items-center justify-between">
          <NavLink to="/" className="text-sm font-black tracking-[-0.04em]">
            FASIKAW®
          </NavLink>
          <Circle size={10} fill="currentColor" strokeWidth={0} className="text-[#e7654b]" />
        </div>

        <nav aria-label="Portfolio navigation" className="space-y-1">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.2em] text-[#69716b]">Explore</p>
          {links.map(([label, href], index) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/"}
              onClick={onClose}
              className={({ isActive }) => `group flex items-center justify-between py-2 text-sm transition-colors ${isActive ? "text-[#202522]" : "text-[#69716b] hover:text-[#e7654b]"}`}
            >
              <span className="flex items-center gap-3">
                <span className="text-[10px] text-[#69716b]">0{index + 1}</span>
                {label}
              </span>
              <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" />
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="text-xs leading-5 text-[#69716b]">
        <p className="mb-3 text-[#202522]">Independent designer<br />based in Addis Ababa.</p>
        <p>Available for selected<br />collaborations · 2026</p>
      </div>
      </aside>
    </>
  );
}