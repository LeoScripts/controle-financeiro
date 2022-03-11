import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMont: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
                                // passando ano,         mes           dia   o dia e irelevante
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear}-${currentDate.getMonth() + 1}`);
    }   

    const handleNextMonth = () => {
        // faz o a separação
        let [year, month] = currentMonth.split('-');
         // carrega o date                  
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        // muda o mes                               // esta e a unica coisa que muda
        currentDate.setMonth( currentDate.getMonth() + 1 );

        // carrega o mes e exibe na tela atraves da minha prop
        onMonthChange(`${currentDate.getFullYear}-${currentDate.getMonth() + 1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem titulo="Receita" value={income}/>
                <ResumeItem titulo="Despesas" value={expense}/>
                <ResumeItem titulo="Balanço" value={income - expense}/>
            </C.ResumeArea>
        </C.Container>
    )
}