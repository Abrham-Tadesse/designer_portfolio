import { projects } from "../../data/projects";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";
import { Link } from "react-router-dom";

export default function FeaturedWork() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-32">
      <div className="mb-12 flex items-end justify-between">
        <SectionLabel>Selected Work</SectionLabel>
        <Link to="/work" className="hidden text-sm underline underline-offset-4 md:block">View all projects</Link>
      </div>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
