import Image from "next/image";
import { Project } from "src/types/project";
import { portfolio } from "src/utils/portfolio";
import PortfolioGallery from "../portfolio-gallery";
import CardAlt from "./Card";

const { projects } = portfolio;

const PortfolioAlt = () => {
  return (
    <div className="bg-black py-16">
      <section className="mx-auto  max-w-5xl">
        <div className="grid grid-cols-12 items-center justify-between">
          <header className="col-span-12 md:col-span-4" id="portfolio">
            <h2 className="font-display text-3xl uppercase">Portfolio</h2>
            <p className=" text-base  md:text-lg">
              Revisa algunos proyectos que he realizado utilizando tecnologías
              cómo Next.js, Typescript.
            </p>
          </header>

          <div className="col-span-12 hidden md:col-span-8 md:block md:place-self-end">
            <div>
              <Image
                src="/img/vectors/work.svg"
                height={200}
                className="mx-auto"
                width={200}
                alt="abstract form"
              />
            </div>
          </div>
        </div>

        <div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {projects.map((project: Project) => (
              <CardAlt key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PortfolioAlt;
