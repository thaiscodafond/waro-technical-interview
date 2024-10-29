export namespace Db {
  /**
   * Product reference, like a T-shirt, a jean, etc. sold by a brand.
   */
  export type Reference = {
    id: string;
    name: string;
    categoryIds: string[];
    modelisation: Modelisation; // Composition of the reference. What is inside is not very important
  };

  /**
   * Category of a reference, like "T-shirt", "Jean", etc.
   */
  export type Category = {
    id: string;
    name: string;
  };

  export type Modelisation = {
    id: string;
    // ... many other fields
  };
}
