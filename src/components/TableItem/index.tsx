import * as C from './styles'
import { Item } from "../../types/Item";
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';


type Props = {
    item: Item
}



export function TableItem({item}: Props) {

  return (
    <C.TableLine>
        <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
        <C.TableColumn>
          {/* esta props color recebe o mesmo {categories[item.category].title}  so que apresetou erro 
            e foi removido temporariament
           */}
          <C.Category color=''>
            {/* {categories[item.category].title} */}
          </C.Category>
        </C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>

        {/* estwe item estava dentro da prop mas {categories[item.category].expense ? 'red' : 'green'}  mais foi removido temporariament */}
        <C.TableColumn color=''>
          R${item.value}
        </C.TableColumn>
    </C.TableLine>
  );
}
