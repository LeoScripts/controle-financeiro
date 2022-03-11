import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';


type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {

    // console.log(list)
    return(
        <C.Table>
            {/* linhas de cabeçario */}
            <thead>
                {/* colunas */}
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>

                {list.map((item, index) => (
                    <TableItem key={index}  item={item}/>
                ))}
            </tbody>
        </C.Table>
    );

};