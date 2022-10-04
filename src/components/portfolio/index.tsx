import { portfolio } from "src/utils/portfolio";
import CardAlt from "./CardAlt";
import type { Project } from "src/types/project";
const { projects } = portfolio;
const Portfolio: React.FC = () => {
  return (
    <div>
      <ul className="mx-auto max-w-5xl px-8 sm:space-y-4">
        {projects.map((project) => (
          <CardAlt key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
