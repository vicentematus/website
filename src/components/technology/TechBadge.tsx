import Image from "next/image";
import { Technology } from "src/types/technology";

const TechnologyItem: React.FC<{ tech: Technology }> = ({ tech }) => {
  const { name, path, id, color } = tech;
  return (
    <div className="col-span-3 flex flex-col items-start sm:col-span-2 md:col-span-1">
      <p className="text-center">{name}</p>
    </div>
  );
};

export default TechnologyItem;
