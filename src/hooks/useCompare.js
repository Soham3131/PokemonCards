// src/hooks/useCompare.js
import { useState } from "react";

let compareSet = [];

export function useCompare() {
  const [selected, setSelected] = useState(compareSet);

  const addToCompare = (pokemon) => {
    if (compareSet.find((p) => p.id === pokemon.id)) return;
    compareSet = [...compareSet, pokemon];
    setSelected(compareSet);
  };

  const removeFromCompare = (id) => {
    compareSet = compareSet.filter((p) => p.id !== id);
    setSelected(compareSet);
  };

  const clearCompare = () => {
    compareSet = [];
    setSelected(compareSet);
  };

  return { selected, addToCompare, removeFromCompare, clearCompare };
}
