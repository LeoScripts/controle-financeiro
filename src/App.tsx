import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./styles/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";



const App = () => {
  // nao estamos tipando o tipo do estate porque ja tipamos la na pasta type
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list,currentMonth])


  // funçaõ que troca o estado do mes
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* area de informações */}
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange} 
        />

        {/* area de incersão de dados */}

        {/* tabela de intens */}
        <TableArea  list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;