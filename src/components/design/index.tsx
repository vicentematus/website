import { portfolio } from "src/utils/portfolio";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
const { design } = portfolio;
const Design: React.FC = () => {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-5xl py-16 lg:py-24">
      <h1 className="font-display text-3xl  text-white" id="design">
        {t("design.title")}
      </h1>
      <ul className="grid grid-cols-1 gap-y-10 gap-x-6 overflow-hidden sm:grid-cols-2 xl:gap-x-8">
        {design.map((item, index) => (
          <a
            href="https://dribbble.com/vicentematus"
            key={index}
            className="group"
          >
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
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Design;
