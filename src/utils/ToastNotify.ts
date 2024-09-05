import { toast } from "react-toastify";

// React Toast Notify Method
export const notify = () =>
  toast.success("Item added +1", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
