import SectionLabel from "../components/ui/SectionLabel";

export default function About() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-14 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel>About me</SectionLabel>
          <h1 className="display-font text-[14vw] leading-[.82] md:text-[7vw]">
            Design with a point of view.
          </h1>
        </div>
        <div className="self-end md:col-span-4">
          <p className="text-xl leading-8">
            I’m Fasikaw, an independent graphic designer focused on identity, art direction and visual communication.
          </p>
        </div>
      </div>

      <div className="my-16 overflow-hidden md:my-24">
        <img src="/images/profile/portriate.jpg" alt="Designer portrait" className="aspect-[4/3] w-full object-contain" />
      </div>

      <div className="grid gap-12 border-t border-black/15 pt-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[.2em] text-neutral-500">Philosophy</p>
        </div>
        <div className="space-y-6 text-2xl leading-9 tracking-[-.03em] md:col-span-6">
          <p>Good design is not the amount of decoration you can add. It is the number of decisions you can make feel inevitable.</p>
          <p>I work from concept first, then build flexible systems that remain recognizable across every touchpoint.</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[.2em] text-neutral-500">Tools</p>
          <p className="mt-4 leading-7">Adobe Illustrator<br />Photoshop<br />InDesign<br />After Effects<br />Figma</p>
        </div>
      </div>
    </section>
  );
}
