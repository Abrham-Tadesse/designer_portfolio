import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-28 text-center md:px-10">
      <p className="text-xs uppercase tracking-[.2em] text-neutral-500">404</p>
      <h1 className="display-font mt-4 text-[18vw] leading-none md:text-[10vw]">Wrong canvas.</h1>
      <Link to="/" className="mt-10 inline-block border-b border-black pb-1 text-sm font-semibold">Back home</Link>
    </section>
  );
}
