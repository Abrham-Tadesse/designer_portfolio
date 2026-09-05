import SectionLabel from "../ui/SectionLabel";

const services = [
  ["01", "Brand Identity", "Strategy, identity systems, logos, guidelines and visual languages built to stay coherent as a brand grows."],
  ["02", "Campaign Design", "Concept-led visuals for launches, events, social campaigns, posters and digital communications."],
  ["03", "Packaging", "Packaging systems where shelf impact, hierarchy and brand character work together instead of competing."],
  ["04", "Art Direction", "A clear visual point of view across photography, typography, layout, color and campaign execution."],
];

export default function Services() {
  return (
    <section className="bg-[#d8d1c2] text-[#3f624e]">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <SectionLabel>What I do</SectionLabel>
        <div>
          {services.map(([number, title, body]) => (
            <div key={number} className="grid gap-4 border-t border-[#3f624e]/25 py-8 md:grid-cols-12 md:py-10">
              <span className="text-xs text-[#3f624e]/60 md:col-span-1">{number}</span>
              <h3 className="display-font text-4xl md:col-span-5 md:text-6xl">{title}</h3>
              <p className="max-w-xl leading-7 text-[#3f624e]/75 md:col-span-6">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
