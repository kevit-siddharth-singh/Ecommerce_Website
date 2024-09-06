import { useEffect } from "react";

const useTitleChangeHook: React.FC<{ title: string }> = ({ title }) => {
  useEffect(() => {
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default useTitleChangeHook;
