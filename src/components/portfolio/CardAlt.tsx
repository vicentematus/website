import type { Project } from "src/types/project";
import type { ImageLoaderProps } from "next/image";

import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
const CardAlt: React.FC<{ project: Project }> = ({ project }) => {
  const { id, published, title, description, images, links } = project;
  let image;

  if (!images[0]) {
    image = "";
  }

  if (!published) return;

  return (
    <li className="-mx-4 flex flex-col items-start bg-slate-50 p-4 pb-10 dark:bg-slate-800/50 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row">
      <div className="flex-auto">
        <h3 className="mb-4 text-sm font-semibold leading-6 text-blue-500">
          Aplicación Web
        </h3>
        <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
          {title}
        </p>
        <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>{description}</p>
        </div>
        <a
          className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
          href={links.deploy}
        >
          Ver deploy
          <ArrowRightCircleIcon className="h-6 w-6" />
        </a>
        <a
          className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
          href={links.github}
        >
          Ver Github
          <ArrowRightCircleIcon className="h-6 w-6" />
        </a>
      </div>
      <div className="mb-10 w-full flex-none xl:mb-0 xl:ml-8 xl:w-[30rem]">
        <div className="  overflow-hidden rounded-lg bg-slate-100 object-fill shadow-lg dark:bg-slate-800">
          <Image src={`${images[0]}`} width={400} height={300} alt="Test" />
        </div>
      </div>
    </li>
  );
};

export default CardAlt;
