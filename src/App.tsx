import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./styles/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth } from './helpers/dateFilter'


export function App() {
  // nao estamos tipando o tipo do estate porque ja tipamos la na pasta type
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=> {
    
  }, [list,currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* area de informações */}

        {/* area de incersão de dados */}

        {/* tabela de intens */}
      </C.Body>
    </C.Container>
  );
}
