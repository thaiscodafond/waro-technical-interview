import { Db } from "./types";

/**
 * This class is a fake database ORM that stores data in memory.
 */
class Database {
  async getReference(id: string) {
    return this.data.references.find((reference) => reference.id === id);
  }

  async getReferences() {
    return this.data.references;
  }

  async getCategory(id: string) {
    return this.data.categories.find((category) => category.id === id);
  }

  async getCategories() {
    return this.data.categories;
  }

  private data: {
    references: Db.Reference[];
    categories: Db.Category[];
  } = {
    references: [
      {
        id: "1",
        name: "Reference 1",
        categoryIds: ["1"],
        modelisation: {
          id: "1",
        },
      },
      {
        id: "2",
        name: "Reference 2",
        categoryIds: ["1"],
        modelisation: {
          id: "2",
        },
      },
    ],
    categories: [
      {
        id: "T-SHIRT",
        name: "T-shirt",
      },
      {
        id: "JEAN",
        name: "Jean",
      },
    ],
  };
}

export default new Database();
