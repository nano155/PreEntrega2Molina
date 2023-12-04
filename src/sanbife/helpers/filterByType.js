import { useContext, useEffect, useState } from "react";
import { SanBifeContext } from "../context/SanBifeContext";

export const filterByType = (type) => {
  const { data } = useContext(SanBifeContext);
  const validType = ["food", "drink"];

  if (validType.includes(type)) {
    return data.filter((data) => data.type === type);
  }
};
