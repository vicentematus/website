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
    <section className="bg-black">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {people.map((person) => (
            <div
              key={person.email}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-800 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={`/img/work/crimson.png`}
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-200">
                  {person.name}
                </p>
                <p className="truncate text-sm text-gray-400">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
