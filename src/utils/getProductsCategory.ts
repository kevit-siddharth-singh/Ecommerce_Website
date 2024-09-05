import axios from "axios";

export async function productCategory() {
  const res = await axios.get("https://fakestoreapi.com/products/categories");

  if (res.status === 200) {
    const { data } = res;
    // console.log(data);
    return data;
  }
  if (res.status !== 200) {
    const error = new Error("An Error occurred during category Fetch... !");
    return error;
  }
}
