import { StaticImageData } from "next/image";

  interface Skill {
    name: string;
    image?: string | StaticImageData;
    star?: number;
  }

  export default Skill