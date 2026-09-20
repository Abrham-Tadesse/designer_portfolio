import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contacts } from "../../data/contacts";


export default function Footer() {
  return (
    <footer className="bg-[#202522] text-[#f4f0e8]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
        <p className="mb-5 text-xs uppercase tracking-[.25em] text-white/45">Have a project in mind?</p>
        <Link to="/contact" className="group flex items-end justify-between border-b border-white/20 pb-8">
          <span className="display-font max-w-5xl text-[14vw] leading-[.78] md:text-[8vw]">Let’s create.</span>
          <ArrowUpRight className="mb-2 h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14" />
        </Link>

        <div className="mt-10 flex flex-col justify-between gap-6 text-sm text-white/55 md:flex-row md:items-end">
          <p>Independent graphic designer & art director.</p>
          <div className="flex gap-6">
            {contacts.map(({ label, href, icon: Icon, color }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <Icon color={color} /> {label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Fasikaw Studio</p>
        </div>
      </div>
    </footer>
  );
}
