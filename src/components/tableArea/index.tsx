import * as C from './styles';

export function TableArea () {
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

            </tbody>
        </C.Table>
    );

};