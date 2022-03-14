import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateInput, setDateInput] = useState("");

  const dateCurrent = dateInput.split("-");
  const [year, month, day] = dateCurrent;
  const [catereryCurrent, setCatereryCurrent] = useState('');

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(`${year}-${month}-${parseInt(day) + 1}`),
      category: catereryCurrent,
      title: "Item de teste",
      value: 250.25,
    };
    onAdd(newItem);

    setDateInput("");
  };

  return (
    <C.Container>
      <C.ContainerInfos>
        <C.Date>
          <label htmlFor="date">Date</label>
          <input
            onChange={(e) => setDateInput(e.target.value)}
            value={dateInput}
            type="date"
            name="date"
            id="date"
          />
        </C.Date>

        <C.Category>
          <label htmlFor="category">Categoria</label>
          <select 
            name="category"  
            id="category"
            onChange={(e) => setCatereryCurrent(e.target.value)}
            defaultValue=''
          >
            <option value="" disabled >selecionar</option>
            <option value="salary">Ganho</option>
            <option value="rend">Despesa</option>
          </select>
        </C.Category>
      </C.ContainerInfos>

      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
