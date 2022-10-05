import Image from "next/image";

const EducationCard: React.FC = ({ item }) => {
  const { image, institution, start_date, end_date, description } = item;
  return (
    <div className="relative flex items-center space-x-3 rounded-lg   bg-gray-900 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 ">
      <div className="flex-shrink-0">
        <div className="relative h-24 w-24 rounded-full">
          <Image
            src={`${item?.image}`}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <span className="absolute inset-0" aria-hidden="true" />
        <h3 className="text-sm font-medium text-gray-200">{institution}</h3>
        <p>
          {start_date} - {end_date}
        </p>
        <p className=" text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};
