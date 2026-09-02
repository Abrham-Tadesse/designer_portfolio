export default function SectionLabel({ children }) {
  return (
    <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-neutral-500">
      <span className="h-2 w-2 rounded-full bg-current" />
      {children}
    </p>
  );
}
