import { Technology } from "./technology";

export interface Item {
  id: number;
  description: string;
}

export interface Work {
  id: number;
  images: string[];
  start_date: string;
  description: string;
  workplace: string;
  end_date: string;
  duration: string;
  items: Item[];
  technologies: Technology[];
}
