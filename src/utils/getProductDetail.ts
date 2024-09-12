import axios from "axios";

export async function getProductDetail(id: string) {
  const res = await axios.get("https://fakestoreapi.com/products/" + id);

  if (res.status === 200) {
    const { data } = res;
    return data;
  }
  if (res.status !== 200) {
    const error = new Error("An Error occurred !");
    console.log(error);
  }
}
