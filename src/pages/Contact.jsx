import { ArrowUpRight } from "lucide-react";
import { contacts } from "../data/contacts";

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-28">
      <p className="mb-5 text-xs uppercase tracking-[.22em] text-neutral-500">New business / collaborations</p>
      <h1 className="display-font max-w-6xl text-[17vw] leading-[.76] md:text-[9vw]">
        Tell me what you want to make.
      </h1>

      <div className="mt-16 grid gap-10 border-t border-black/15 pt-10 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="max-w-2xl text-xl leading-8 text-neutral-600">
            Share a short overview of the project, what needs to be designed, your target launch date and an approximate budget. Clear briefs get better answers.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="mt-8 flex flex-col border-t border-black/15 text-sm">
            {contacts.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-black/15 py-4 hover:text-neutral-500"
              >
                <span className="flex items-center gap-3">
                  <Icon color={color} size={18} />
                  {label}
                </span>
                <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
