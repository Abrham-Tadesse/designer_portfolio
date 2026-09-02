import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "../ui/SectionLabel";

export default function AboutStrip() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-32">
      <SectionLabel>About</SectionLabel>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="display-font text-4xl leading-[1.02] md:text-7xl">
            I turn strategy into <span className="italic">visual systems</span> people can recognize, remember and feel.
          </p>
        </div>
        <div className="flex flex-col justify-end md:col-span-4">
          <p className="max-w-md leading-7 text-neutral-600">
            Based in Addis Ababa and working with ambitious people everywhere. My practice moves between brand identity, editorial thinking, campaign design and packaging.
          </p>
          <Link to="/about" className="mt-7 flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4">
            More about the practice <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
