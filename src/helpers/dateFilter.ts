import { Item } from "../types/Item";


// funçao que pega o mes atual 
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}


// função que verifica e retorna os itens do mesmo ano e do mesmo mes
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];

    let [year, month] = date.split('-');

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year)&&
            (list[i].date.getMonth() + 1 ) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}

// função que formata a data
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day  = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

// função adiciona o zero 
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`; 

export const formatCurrentMonth = (currentMonth: string): string => {
    // pegando o mes e o ano da nossa data e separndo com o split
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Desembro'];
            // pegamos months passamos pra Nº inteiro -  1 pois colocamos  + 1 na data
    return `${months[parseInt(month) - 1]} ${year}`;

}