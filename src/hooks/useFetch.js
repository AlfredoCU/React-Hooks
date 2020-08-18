import { quotesBb } from "../helpers/quotesBb";
import { useEffect, useState, useRef } from "react";

export const useFetch = (id) => {
  const [state, setstate] = useState({ data: null, loading: true });
  const isMounted = useRef(true); // Montado.
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      quotesBb(id)
        .then((data) => setstate({ data, loading: false }))
        .catch((error) => console.error("USE_FETCH_ERROR", error));
    } else {
      console.log("isUnmountend"); // Desmontado.
    }
  }, [id]);

  return state;
};
