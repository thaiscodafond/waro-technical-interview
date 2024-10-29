export namespace Db {
  /**
   * Product reference, like a T-shirt, a jean, etc. sold by a brand.
   */
  export type Reference = {
    id: string;
    name: string;
    categoryId: Category; // Foreign key to Category
    tagIds: Tag[]; // Foreign keys to Tag
    impacts: Impact[];
    modelisation: Modelisation; // Composition of the reference. What is inside is not very important
  };

  export type Impact = {
    impactCategory: "climate change" | "water consumption" | "land use";
    value: number;
  };

  /**
   * Category of a reference, like "T-shirt", "Jean", etc.
   */
  export type Category = "T-shirt" | "Jean" | "Pullover";

  export const categories: Category[] = ["Jean", "T-shirt", "Pullover"];

  /**
   * Tag of a reference, like "organic", "recycled", etc.
   */
  export type Tag = "Usine A" | "Usine B" | "Fournisseur A" | "Fournisseur B";

  export const tags: Tag[] = [
    "Usine A",
    "Usine B",
    "Fournisseur A",
    "Fournisseur B",
  ];

  export type Modelisation = {
    id: string;
    // ... many other fields
  };
}
