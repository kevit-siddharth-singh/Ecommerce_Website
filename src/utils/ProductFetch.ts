import axios from "axios";

export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  rating: { rate: number; count: number };
  title: string;
};

export async function fetchProduct() {
  const res = await axios.get("https://fakestoreapi.com/products");

  if (res.status === 200) {
    return res.data;
  }
  return null;
}
