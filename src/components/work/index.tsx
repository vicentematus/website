import type { Work as TypeWork, Work } from "src/types";
import { portfolio } from "src/utils/portfolio";
import { ArrowDownIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import WorkCard from "./WorkCard";
const { work_experience } = portfolio;
const WorkPage: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="mx-auto mt-10 max-w-3xl lg:mt-28">
        <div className="rounded-2xl   p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-6 w-6 flex-none" />
            <span className="ml-3 text-2xl text-gray-200">
              Experiencia Laboral
            </span>
          </h2>
          <div className="mx-auto max-w-3xl  divide-y divide-solid divide-gray-700 px-4 py-2">
            {work_experience.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          <div className="  px-4 py-2">
            <a
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 py-2 px-3 text-sm font-medium text-gray-100 outline-offset-2 transition hover:bg-gray-800 active:bg-gray-800 active:text-gray-100/60 active:transition-none "
              href="#"
            >
              Descargar CV (como archivo PDF)
              <ArrowDownIcon
                className="h-4 w-4 stroke-zinc-400 transition
          group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50
          dark:group-active:stroke-zinc-50"
              />
            </a>
            <a
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 py-2 px-3 text-sm font-medium text-gray-100 outline-offset-2 transition hover:bg-gray-800 active:bg-gray-800 active:text-gray-100/60 active:transition-none  "
              href="#"
            >
              Descargar CV (como archivo Word)
              <ArrowDownIcon
                className="h-4 w-4 stroke-zinc-400 transition
          group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50
          dark:group-active:stroke-zinc-50"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
