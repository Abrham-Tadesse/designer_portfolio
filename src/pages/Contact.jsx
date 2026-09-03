import { Mail, ArrowUpRight } from "lucide-react";

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
          <a href="mailto:hello@fasikawstudio.design" className="group flex items-center justify-between border-b border-black py-4 text-xl font-semibold">
            <span className="flex items-center gap-3"><Mail size={20} /> hello@fasikawstudio.design</span>
            <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <div className="mt-8 flex gap-6 text-sm">
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Behance</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Instagram</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
