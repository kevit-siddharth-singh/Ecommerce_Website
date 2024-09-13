import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for a product
export interface Product {
  id: number;
  title: string;
  image: string; // URL or path to the product image
  price: number;
  quantity: number;
  totalPrice: number;
  buyerName: string;
  address: string;
  phn: string;
}

// Define a type for the slice state
interface OrderedProductsState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
  isOrderSuccess: boolean;
}

const initialState: OrderedProductsState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  isOrderSuccess: false,
};

const orderedProductsSlice = createSlice({
  name: "orderedProducts",
  initialState,
  reducers: {
    // Action to add a product to the order
    addProduct: (state, action: PayloadAction<Omit<Product, "totalPrice">>) => {
      const newProduct = action.payload;

      // Ensure products is always defined
      if (!state.products) {
        state.products = [];
      }

      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        // If the product already exists, increase its quantity and update the price
        existingProduct.quantity += newProduct.quantity;
        existingProduct.totalPrice += newProduct.price * newProduct.quantity;
      } else {
        // If the product is new, add it to the products array
        state.products.push({
          ...newProduct,
          totalPrice: newProduct.price * newProduct.quantity,
        });
      }

      // Update the total quantity and total price
      state.totalQuantity += newProduct.quantity;
      state.totalPrice += newProduct.price * newProduct.quantity;
    },
    // Action to remove a product from the order
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      // Ensure products is always defined
      if (!state.products) {
        return;
      }

      const existingProduct = state.products.find(
        (product) => product.id === productId
      );

      if (existingProduct) {
        // Update the total quantity and total price
        state.totalQuantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.totalPrice;

        // Remove the product from the products array
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
      }
    },
    // Action to clear all products
    clearOrder: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    setIsSuccessfullOrder: (state, action: PayloadAction<boolean>) => {
      state.isOrderSuccess = action.payload;
    },
  },
});

export const orderedProductsActions = orderedProductsSlice.actions;
export default orderedProductsSlice.reducer;
