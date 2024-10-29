import { faker } from "@faker-js/faker";
import { Db } from "./types";

const reference = (): Db.Reference => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  categoryId: faker.helpers.arrayElement(Db.categories),
  tagIds: faker.helpers.arrayElements(Db.tags),
  impacts: [
    {
      impactCategory: "climate change",
      value: faker.number.float({ min: 0 }),
    },
    {
      impactCategory: "water consumption",
      value: faker.number.float({ min: 0 }),
    },
    {
      impactCategory: "land use",
      value: faker.number.float({ min: 0 }),
    },
  ],
  modelisation: {
    id: faker.string.uuid(),
  },
});

export const generator = {
  references: (count: number) =>
    faker.helpers.multiple(() => reference(), { count }),
};
