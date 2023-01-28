import { useRef } from "react";
import { useEffect } from "react";
//ver hacia atras 
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;