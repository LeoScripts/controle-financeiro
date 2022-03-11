import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {
    const handleAddEvent = () => {

        // item fixo so pra teste
        let newItem: Item = {
            date: new Date(2022, 3, 11),
            category: 'foot',
            title: 'Item de teste',
            value: 250.25

        }
        
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}