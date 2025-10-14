/* eslint-disable max-len */
import { Router } from "express";
import { Product } from "../types/product";
import { Status } from "../types/status";
import { v7 as uuid } from "uuid";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const record: Product = {
    id,
    name: "T-shirt regular col rond 100% coton",
    category: "T Shirt",
    imgSrc:
      "https://www.celio.com/dw/image/v2/BGBR_PRD/on/demandware.static/-/Sites-celio-master/default/dwf55a1624/hi-res/147309-700-TEBASE_OPTICALWHITE-WEB3-1.jpg",
    variants: [
      {
        id: uuid(),
        color: "Blanc",
      },
      {
        id: uuid(),
        color: "Noir",
      },
    ],
    status: Status.NotStarted,
    co2Impact: 7.5,
    tags: ["Coton", "ETE25"],
  };

  res.json({
    record,
  });
});

router.get("/products", (_req, res) => {
  const records: Product[] = [
    {
      id: uuid(),
      name: "T-shirt regular col rond 100% coton",
      category: "T Shirt",
      imgSrc:
        "https://www.celio.com/dw/image/v2/BGBR_PRD/on/demandware.static/-/Sites-celio-master/default/dwf55a1624/hi-res/147309-700-TEBASE_OPTICALWHITE-WEB3-1.jpg",
      variants: [
        {
          id: uuid(),
          color: "Blanc",
        },
        {
          id: uuid(),
          color: "Noir",
        },
      ],
      status: Status.NotStarted,
      co2Impact: 7.5,
      tags: ["Coton", "ETE25"],
    },
    {
      id: uuid(),
      name: "Jean skinny 5 poches",
      category: "Jean",
      imgSrc:
        "https://www.celio.com/dw/image/v2/BGBR_PRD/on/demandware.static/-/Sites-celio-master/default/dw54e583a8/hi-res/166236-211-STRAIGHT3L_STONE-WEB3-1.jpg",
      variants: [
        {
          id: uuid(),
          color: "Bleu",
        },
        {
          id: uuid(),
          color: "Stone",
        },
      ],
      status: Status.InProgress,
      co2Impact: 14,
      tags: ["Denim", "HIVER25"],
    },
  ];

  res.json({
    records,
  });
});

export { router };
