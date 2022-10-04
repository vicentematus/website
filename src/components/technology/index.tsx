import Image from "next/image";
import { Technology } from "src/types/technology";

const TechnologyItem: React.FC<{ tech: Technology }> = ({ tech }) => {
  const { name, path, id } = tech;
  return (
    <div className="col-span-3 flex flex-col items-start sm:col-span-2 md:col-span-1">
      <div className="flex-none">
        <Image src={`${path}`} width={50} height={50} alt={name} />
      </div>
      <div>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default TechnologyItem;
