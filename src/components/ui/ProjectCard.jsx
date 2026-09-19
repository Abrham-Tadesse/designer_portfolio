import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group">
      <Link to={`/work/${project.slug}`} className="block aspect-[4/3] overflow-hidden bg-neutral-200">
        <img
          src={project.cover}
          alt={`${project.title} project`}
          className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.035]"
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-5">
        <div>
          <p className="text-xs text-neutral-500">0{index + 1} / {project.category}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-[-.04em] md:text-3xl">{project.title}</h3>
        </div>
        <Link to={`/work/${project.slug}`} aria-label={`View ${project.title}`} className="mt-2 rounded-full border border-black/20 p-2 transition hover:bg-black hover:text-white">
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
