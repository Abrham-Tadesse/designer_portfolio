import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

const sectionNames = ["Logos", "Posters", "Flyers", "Packaging", "Others"];

const shuffle = (items) => {
  const shuffled = [...items];
  let seed = 19;

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    seed = (seed * 31 + 17) % 997;
    const swapIndex = seed % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
};

const workSections = sectionNames.map((name) => ({ name, projects: [] }));
const workImages = shuffle(
  projects.flatMap((project) => [
    { project, image: project.cover },
    ...project.views.map((view) => ({ project, image: view.image })),
  ]),
);

workImages.forEach((item, index) => {
  workSections[index % workSections.length].projects.push(item);
});

export default function Work() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-14 md:px-10 md:py-24">
      <div className="mb-20 grid gap-8 border-b border-black/15 pb-12 md:grid-cols-12 md:pb-16">
        <h1 className="display-font text-[17vw] leading-[.8] md:col-span-8 md:text-[9vw]">Selected<br />work.</h1>
        <p className="max-w-sm self-end leading-7 text-neutral-600 md:col-span-4">
          A selection of identity systems, campaigns, packaging and experimental design. The projects are presented as case studies, not decoration.
        </p>
      </div>
      <div className="space-y-24 md:space-y-32">
        {workSections.map((section, sectionIndex) => (
          <section key={section.name} aria-labelledby={`${section.name.toLowerCase()}-heading`}>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-black/15 pb-4 md:mb-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-neutral-500">0{sectionIndex + 1} / Archive</p>
                <h2 id={`${section.name.toLowerCase()}-heading`} className="display-font text-5xl md:text-7xl">{section.name}</h2>
              </div>
              <span className="pb-1 text-sm text-neutral-500">{String(section.projects.length).padStart(2, "0")} pieces</span>
            </div>
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
              {section.projects.map(({ project, image }, index) => (
                <ProjectCard
                  key={`${section.name}-${project.slug}-${image}`}
                  project={{ ...project, cover: image, category: section.name }}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
