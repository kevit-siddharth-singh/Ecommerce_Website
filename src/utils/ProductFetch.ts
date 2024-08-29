import axios from "axios";

export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  rating: { rate: number; count: number };
  title: string;
  price: number;
};

export async function fetchProduct() {
  const res = await axios.get("https://fakestoreapi.com/products");

  if (res.status === 200) {
    const { data } = res;
    // console.log(data);
    return data;
  }
  if (res.status !== 200) {
    const error = new Error("An Error occurred !");
    return error;
  }
}
