import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export default function useFetch(endpoint) {
  const [data, setData] = useState();
  useEffect(() => {
    makeAPiCall();
  }, [endpoint]);
  const makeAPiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };
  return {data};
}
