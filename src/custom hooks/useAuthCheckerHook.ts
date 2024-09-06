import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";
import { useEffect } from "react";

const useAuthCheckerHook = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticate
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default useAuthCheckerHook;
