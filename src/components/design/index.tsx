import { portfolio } from "src/utils/portfolio";
import Image from "next/image";
const { design } = portfolio;
const Design: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-semibold text-white">
        Alguno de mis diseños.
      </h1>
      <ul className="grid grid-cols-1 gap-y-10 gap-x-6 overflow-hidden sm:grid-cols-2 xl:gap-x-8">
        {design.map((item, index) => (
          <a href="#" key={index} className="group">
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full  overflow-hidden rounded-lg">
              <Image
                src={item?.images[0]}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                width={300}
                height={500}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium text-gray-100">
              {item?.title}
            </h3>
            <p className="mt-1   text-gray-200">{item?.description}</p>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Design;
