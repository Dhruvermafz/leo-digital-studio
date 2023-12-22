import React, { useEffect, useRef } from "react";
import jQuery from "jquery";

const CountTo = () => {
  const countRef = useRef(null);

  useEffect(() => {
    jQuery(countRef.current).countTo({
      from: 0,
      to: 100,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
    });
  }, []);

  return <div ref={countRef}></div>;
};

export default CountTo;
