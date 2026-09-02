import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Work() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-14 md:px-10 md:py-24">
      <div className="mb-16 grid gap-8 md:grid-cols-12">
        <h1 className="display-font text-[17vw] leading-[.8] md:col-span-8 md:text-[9vw]">Selected<br />work.</h1>
        <p className="max-w-sm self-end leading-7 text-neutral-600 md:col-span-4">
          A selection of identity systems, campaigns, packaging and experimental design. The projects are presented as case studies, not decoration.
        </p>
      </div>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
