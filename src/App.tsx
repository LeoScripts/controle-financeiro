import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";



const App = () => {
  // nao estamos tipando o tipo do estate porque ja tipamos la na pasta type
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] =  useState(0);
  const [expense, setExpense] =  useState(0);

  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list,currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);


  // funçaõ que troca o estado do mes
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }


  // funçao que adiciona o item
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
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
          income={income}
          expense={expense}
        />

        {/* area de incersão de dados */}
        <InputArea onAdd={handleAddItem}/>

        {/* tabela de intens */}
        {/* <TableArea  list={filteredList}/> */}
        <TableArea  list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;