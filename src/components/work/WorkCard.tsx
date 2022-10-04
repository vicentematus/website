import type { Item, Work } from "src/types";
import Image from "next/image";
import ListItem from "./list-item/ListItem";
import TechnologyItem from "../technology";
import { Technology } from "src/types/technology";
import { ClockIcon } from "@heroicons/react/24/outline";
const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
  const {
    images,
    start_date,
    description,
    workplace,
    end_date,
    duration,
    items,
    technologies,
  } = work;
  return (
    <article className="py-4 sm:py-12">
      <div className="flex flex-col items-start sm:flex-row sm:gap-x-4">
        <div className="flex-none">
          <Image width={70} height={70} src={`${images[0]}`} alt={workplace} />
        </div>
        <div>
          <h2
            id={`work-title`}
            className="mt-2 text-lg font-bold text-gray-100"
          >
            {workplace}
          </h2>
          <div>
            <time className=" font-mono text-sm leading-7 text-gray-100">
              {start_date}
            </time>
            <span className="text-white">-</span>
            <time className=" font-mono text-sm leading-7 text-gray-100">
              {end_date}
            </time>

            <div className="flex items-center font-mono text-sm">
              <ClockIcon className="h-6 w-6 text-gray-300" />

              <p className="ml-1 inline text-white ">{duration}</p>
            </div>
          </div>

          <p className="mt-1 text-base leading-7 text-gray-300">
            {description}
          </p>
          <ul className=" text-white">
            {items.map((item: Item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="mt-4 sm:mt-8 md:mt-10">
            <h3 className="text-lg font-semibold text-gray-200">
              Tecnologias usadas
            </h3>
            <div className="grid grid-cols-6">
              {technologies.map((tech: Technology) => (
                <TechnologyItem key={tech.id} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
