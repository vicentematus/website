import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Project } from "src/types/project";
import CardAlt from "./Card";

const PortfolioAlt = () => {
  const { t, i18n, ready } = useTranslation();

  const projectsInt = t("portfolio.projects", { returnObjects: true });

  return (
    <div className="bg-gray-900 py-16">
      <section className="mx-auto  max-w-5xl">
        <div className="grid grid-cols-12 items-center justify-between">
          <header className="col-span-12 md:col-span-4" id="portfolio">
            <h2 className="font-display text-3xl uppercase">
              {t("portfolio.title")}
            </h2>
            <p className=" text-base  md:text-lg">
              {t("portfolio.description")}
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
            className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2  md:grid-cols-3"
          >
            {projectsInt.map((project: Project) => (
              <CardAlt key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PortfolioAlt;
