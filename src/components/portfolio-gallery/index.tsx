import Image from "next/image";
import { portfolio } from "src/utils/portfolio";

const { projects } = portfolio;
const files = [
  {
    title: "IMG_4985.HEICasdjasdkj",
    size: "3.9 MB",
    source: "/img/volume-landmarks-reinassance-periodization-preview.png",
  },
  // More files...
];

export default function PortfolioGallery() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="aspect-w-10 aspect-h-7 group relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={file.source}
              height={500}
              width={500}
              alt="project"
              className="pointer-events-none object-cover "
            />
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
}
