export default function Marquee() {
  const text = "BRAND IDENTITY ✦ ART DIRECTION ✦ PACKAGING ✦ CAMPAIGN DESIGN ✦ TYPOGRAPHY ✦ ";
  return (
    <div className="overflow-hidden border-y border-black/10 py-4">
      <div className="marquee-track flex w-max whitespace-nowrap text-sm font-semibold tracking-[.12em]">
        <span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
}
