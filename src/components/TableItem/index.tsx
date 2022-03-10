import * as C from './styles'
import { Item } from "../../types/Item";
import { formatDate } from '../../helpers/dateFilter'


type Props = {
    item: Item
}

export function TableItem({item}: Props) {
  return (
    <C.TableLine>
        <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
        <C.TableColumn>{item.category}</C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>
        <C.TableColumn>{item.value}</C.TableColumn>
    </C.TableLine>
  );
}
