import axios from "axios";
import { ProductType } from "./ProductFetch";

export async function getProductDetail(id: string) {
  const res = await axios.get<ProductType>(
    "https://fakestoreapi.com/products/" + id
  );

  if (res.status === 200) {
    const { data } = res;

    // console.log(data);
    return data;
  }
  if (res.status !== 200) {
    const error = new Error("An Error occurred !");

    console.log(error);
  }
}
