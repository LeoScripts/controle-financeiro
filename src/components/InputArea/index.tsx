import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    // item fixo so pra teste
    let newItem: Item = {
      date: new Date(),
      category: "foot",
      title: "Item de teste",
      value: 250.25,
    };

    

    onAdd(newItem);
  };

  return (
    <C.Container>
      <C.Date>
        <label htmlFor="date">Date</label>
        <input onChange={(e)=> {e.target.value}} type="date" name="date" id="date" />
      </C.Date>

      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
