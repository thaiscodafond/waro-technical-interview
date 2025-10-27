const t = (text: string, nb: number) => {
    return `${nb} ${text}${nb > 1 ? "s": ""}`
}

async function fetchProducts() {
  const response = await fetch("http://localhost:4000/products");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

export {t, fetchProducts};