import { portfolio } from "src/utils/portfolio";
import Image from "next/image";
import { boolean } from "zod";
import { useState } from "react";
const { design } = portfolio;
const Design: React.FC = () => {
  const [hover, setHover] = useState(false);
  const mouseHover = () => {
    console.log("entraste");
  };
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="font-display text-3xl font-semibold text-white lg:text-5xl">
        Diseños
      </h1>
      <ul className="grid grid-cols-1 gap-y-10 gap-x-6 overflow-hidden sm:grid-cols-2 xl:gap-x-8">
        {design.map((item, index) => (
          <a href="#" key={index} className="group">
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full  overflow-hidden rounded-lg">
              <Image
                src={item?.images[0]}
                alt={item.description}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              {hover && <div className="absolute text-5xl">hola</div>}
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Design;
