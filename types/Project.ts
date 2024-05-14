import { StaticImageData } from "next/image";

export interface Project {
  name: string,
  description: string,
  description2: string;
  codepen?: string,
  links: string[];
  image?: string | StaticImageData,
  featured: boolean
}
