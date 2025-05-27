import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const categories = ["Frontend", "Backend", "Arquitectura", "DevOps", "Todos"];
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "Todos"
      ? projectItems
      : projectItems.filter((p) => p.category === activeCategory);

  const projectsToDisplay = showAll
    ? filteredProjects
    : activeCategory === "Todos"
    ? filteredProjects.slice(0, 6)
    : filteredProjects.slice(0, 3);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, [activeCategory, showAll]);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Tabs */}
        <div className="projects-badges mb-10 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`cursor-pointer text-xs font-medium rounded-md px-4 py-2 transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-black-200 text-white-50 hover:bg-black-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeCategory === "Todos" ? (
          <>
            {/* Grid layout */}
            <div className="grid-3-cols">
              {projectsToDisplay.map((proj, idx) => (
                <div
                  key={proj.title}
                  ref={(el) => (projectRefs.current[idx] = el)}
                  className="card-border rounded-xl p-6 flex flex-col gap-4"
                >
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">{proj.title}</h2>
                  <p className="text-white-50 text-sm">{proj.description}</p>
                  <div className="mt-2 space-y-2 text-sm text-white-50">
                    <p><strong>Rol:</strong> {proj.role}</p>
                    <ul className="list-disc list-inside">
                      {proj.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="projects-badges flex flex-wrap gap-2 mt-2">
                    <p><strong>Tecnologías:</strong></p>
                    {proj.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs border border-white-50 text-white-50 px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length > projectsToDisplay.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm px-6 py-2 rounded-md bg-white text-black hover:bg-black-50 hover:text-white transition-all"
                >
                  Ver todos los proyectos
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="showcaselayout">
            {/* Principal */}
            <div className="first-project-wrapper" ref={(el) => (projectRefs.current[0] = el)}>
              {projectsToDisplay[0] && (
                <>
                  <div className="image-wrapper w-full aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={projectsToDisplay[0].image}
                      alt={projectsToDisplay[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-content">
                    <h2>{projectsToDisplay[0].title}</h2>
                    <p className="text-white-50 md:text-xl">
                      {projectsToDisplay[0].description}
                    </p>
                    <div className="mt-2 space-y-2 text-sm text-white-50">
                      <p><strong>Rol:</strong> {projectsToDisplay[0].role}</p>
                      <ul className="list-disc list-inside">
                        {projectsToDisplay[0].highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="projects-badges flex flex-wrap gap-2 mt-2">
                      <p><strong>Tecnologías:</strong></p>
                      {projectsToDisplay[0].techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs border border-white-50 text-white-50 px-3 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Secundarios */}
            <div className="project-list-wrapper overflow-hidden">
              {projectsToDisplay.slice(1).map((proj, idx) => (
                <div
                  key={proj.title}
                  ref={(el) => (projectRefs.current[idx + 1] = el)}
                  className="project"
                >
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-black-50">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="mt-3 text-base md:text-lg font-semibold">{proj.title}</h2>
                  <p className="text-white-50 text-sm">{proj.description}</p>
                  <div className="mt-2 space-y-2 text-sm text-white-50">
                    <p><strong>Rol:</strong> {proj.role}</p>
                    <ul className="list-disc list-inside">
                      {proj.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="projects-badges flex flex-wrap gap-2 mt-2">
                    <p><strong>Tecnologías:</strong></p>
                    {proj.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs border border-white-50 text-white-50 px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;