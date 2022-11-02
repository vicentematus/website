import { Project } from "src/types/project";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Github } from "@icons-pack/react-simple-icons";
const CardAlt = ({ project }: { project: Project }) => {
  const { id, published, title, description, images, links } = project;
  let image;

  if (!images[0]) {
    image = "";
  }

  if (!published) return;

  return (
    <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-900 text-center shadow hover:scale-110 hover:transition-transform">
      <div className="flex flex-1 flex-col p-2">
        <Image
          className="mx-auto flex-shrink-0 rounded-md"
          width={500}
          height={500}
          src={`${images[0]}`}
          alt={title}
        />
        <h3 className="mt-6 text-left text-lg font-medium text-gray-100 ">
          {title}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="max-w-prose text-left text-sm ">{description}</dd>
          <dt className="sr-only">Role</dt>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex ">
          <div className="flex w-0 flex-1">
            <a
              href={`#`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center py-4 text-sm font-medium text-gray-200 hover:text-gray-500"
            >
              <Github height={20} width={20} className="text-white" />
              <span className="ml-3 text-gray-200">Ver Github</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`${links.deploy}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center   py-4 text-sm font-medium text-gray-100 hover:text-gray-400"
            >
              <PhoneIcon className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="ml-3">Ver Deploy</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardAlt;
