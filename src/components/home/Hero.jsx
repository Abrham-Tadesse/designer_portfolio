import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 pb-14 pt-12 md:px-10 md:pb-24 md:pt-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-9">
          <img
            src="/images/profile/profile.jpg"
            alt="Fasikaw profile"
            className="mb-5 h-40 w-40 rounded-full object-cover"
          />
          <h2 className="mb-5 text-xs uppercase tracking-[.22em] text-neutral-500">
            Graphic Designer · Art Director
          </h2>
          <h1 className="display-font text-[14vw] font-bold leading-none tracking-tight md:text-[8vw]">
            Visual ideas
            <br />
            <span>with impact.</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end md:col-span-3">
          <p className="max-w-sm text-base leading-7 text-neutral-600">
            I build memorable identities, campaigns and visual systems for brands that want to be impossible to ignore.
          </p>
          <Link
            to="/work"
            className="mt-7 inline-flex w-fit items-center gap-3 border-b border-black pb-1 text-sm font-semibold"
          >
            Explore selected work <ArrowDownRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}