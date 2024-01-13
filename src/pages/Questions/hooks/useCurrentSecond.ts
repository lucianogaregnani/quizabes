import { useEffect, useState } from "react";

function useCurrentSecond() {
    const [currentSecond, setCurrentSecond] = useState(0);

    const resetCurrentSecond = () => {
      setCurrentSecond(0)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSecond((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return ({ currentSecond, resetCurrentSecond });
}

export default useCurrentSecond;