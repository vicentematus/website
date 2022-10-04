import type { Technology } from "./technology";

export interface Project {
  id: number;
  title: string;
  description: string;
  published: boolean;

  technologies: Technology[];
  images: string[];
  links: {
    deploy: string;
    github: string;
  };
}
