import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { portfolio } from "src/utils/portfolio";
const { education } = portfolio;
const people = [
  {
    name: "Leslie Alexander",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const Education: React.FC = () => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center">
          <span>
            <AcademicCapIcon className="h-6 w-6" />
          </span>
          <h2 className="ml-2 text-3xl font-semibold">Educación</h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center space-x-3 rounded-lg   bg-gray-900 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 "
            >
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
                <h3 className="text-sm font-medium text-gray-200">
                  {item.institution}
                </h3>
                <p>
                  {item.start_date} - {item.end_date}
                </p>
                <p className=" text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
