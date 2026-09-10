import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../data/projects";

function ProjectView({ project, view, index }) {
  const isMockup = view.label.toLowerCase().includes("mockup") || view.label.toLowerCase().includes("packaging");

  if (!isMockup) {
    return (
      <figure>
        <div className="overflow-hidden bg-black/5">
          <img src={view.image} alt={`${project.title} ${view.label}`} className="w-full transition duration-700 hover:scale-[1.02]" />
        </div>
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[.16em] text-neutral-500">
          <span>{view.label}</span>
          <span>0{index + 1}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="md:col-span-2">
      <div className="relative isolate min-h-[28rem] overflow-hidden bg-[#c9c6bf] [background:linear-gradient(180deg,#e8e7e3_0%,#d7d5cf_58%,#aaa8a2_58%,#777672_100%)] md:min-h-[44rem]">
        <div className="absolute inset-x-0 top-[58%] h-px bg-black/20" />
        <div className="absolute bottom-0 left-0 h-[42%] w-full opacity-40 [background:repeating-linear-gradient(90deg,transparent_0,transparent_19.8%,rgba(255,255,255,.18)_20%,transparent_20.2%)]" />
        <div className="absolute bottom-[10%] left-1/2 w-[min(68%,34rem)] -translate-x-1/2 rotate-[-2deg] shadow-[2.5rem_2rem_2rem_rgba(0,0,0,.28)]">
          <div className="border-[.55rem] border-[#d8d7d2] bg-[#252525] p-[.45rem] shadow-[inset_0_0_0_1px_rgba(0,0,0,.55)] md:border-[.8rem] md:p-2">
            <img src={view.image} alt={`${project.title} ${view.label} in an environment`} className="block aspect-[4/3] w-full object-cover" />
          </div>
          <div className="mx-auto h-20 w-[18%] bg-gradient-to-r from-[#85847f] via-[#e2e0da] to-[#85847f] shadow-[.4rem_0_1rem_rgba(0,0,0,.2)] md:h-32" />
        </div>
        <div className="absolute bottom-[7%] left-[12%] h-2 w-1/3 rounded-full bg-black/20 blur-md" />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[.16em] text-neutral-500">
        <span>{view.label} / real-world application</span>
        <span>0{index + 1}</span>
      </figcaption>
    </figure>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/404" replace />;

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-10 md:py-20">
        <Link to="/work" className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black">
          <ArrowLeft size={16} /> All work
        </Link>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-4 text-xs uppercase tracking-[.2em] text-neutral-500">{project.category} · {project.year}</p>
            <h1 className="display-font text-[16vw] leading-[.78] md:text-[8.5vw]">{project.title}</h1>
          </div>
          <p className="self-end text-lg leading-8 text-neutral-600 md:col-span-4">{project.summary}</p>
        </div>
      </section>

      <figure className="bg-black/5">
        <img src={project.cover} alt={`${project.title} primary presentation`} className="w-full object-cover" />
      </figure>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[.18em] text-neutral-500">Client</p>
          <p className="mt-2">{project.client}</p>
          <p className="mt-7 text-xs uppercase tracking-[.18em] text-neutral-500">Services</p>
          <div className="mt-2">{project.services.map(s => <p key={s}>{s}</p>)}</div>
        </div>
        <div className="md:col-span-4">
          <p className="mb-3 text-xs uppercase tracking-[.18em] text-neutral-500">Challenge</p>
          <p className="leading-7">{project.challenge}</p>
        </div>
        <div className="md:col-span-5">
          <p className="mb-3 text-xs uppercase tracking-[.18em] text-neutral-500">Approach</p>
          <p className="text-2xl leading-9 tracking-[-.03em]">{project.solution}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/15 pb-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.2em] text-neutral-500">Visual system</p>
            <h2 className="display-font text-5xl md:text-7xl">The details</h2>
          </div>
          <p className="max-w-xs text-right text-sm leading-6 text-neutral-500">Identity, application and the physical world of {project.title}.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {project.views.map((view, index) => (
            <ProjectView key={view.image} project={project} view={view} index={index} />
          ))}
        </div>
      </section>

      <Link to={`/work/${next.slug}`} className="group block bg-[#202522] text-white">
        <div className="mx-auto flex max-w-[1500px] items-end justify-between px-5 py-20 md:px-10 md:py-28">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[.2em] text-white/45">Next project</p>
            <h2 className="display-font text-[14vw] leading-[.8] md:text-[7vw]">{next.title}</h2>
          </div>
          <ArrowUpRight className="h-9 w-9 transition group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14" />
        </div>
      </Link>
    </article>
  );
}
