import { Status } from "./status";

export type Product = {
  id: string;
  name: string;
  category: string;
  imgSrc: string;
  variants: {
    id: string;
    color: string;
  }[];
  status: Status;
  co2Impact: number;
  tags: string[];
};
