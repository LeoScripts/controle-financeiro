import * as C from './styles';

export function TableArea () {
    return(
        <C.Table>
            {/* linhas de cabeçario */}
            <thead>
                {/* colunas */}
                <tr>
                    <C.TableHeadColumn>Data</C.TableHeadColumn>
                    <C.TableHeadColumn>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </C.Table>
    );

};