import { Product } from "./product";
import { User } from "./user";

export type Company = {
  id: string;
  name: string;
  products: Product[];
  users: User[];
};
