import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../data/projects";

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

      <img src={project.cover} alt={project.title} className="w-full object-cover" />

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

      <section className="mx-auto max-w-[1500px] space-y-8 px-5 pb-24 md:px-10 md:pb-32">
        {project.images.map((image, i) => (
          <img key={image} src={image} alt={`${project.title} detail ${i + 1}`} className="w-full" />
        ))}
      </section>

      <Link to={`/work/${next.slug}`} className="group block bg-[#171717] text-white">
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
