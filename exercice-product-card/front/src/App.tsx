import { ProductCard } from "./components/ProductCard";
import { useState, useEffect } from "react";
import type { Product } from "./types/product";
import { fetchProducts } from "./utils";

const App = () => {
  const [cards, setCards] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      await fetchProducts()
        .then((res) => {
          setCards(res.records);
        })
        .catch((e) => console.error(e));
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <img
        width={200}
        src="https://cdn.prod.website-files.com/64d8f9385436d9a10dfd58d9/64e1ccfe49e674bb29d6e9bc_Waro19-p-2000.png"
        alt="Waro logo"
      />
      {cards && cards.map((props) => <ProductCard key={props.id} {...props} />)}
    </div>
  );
};

export default App;
