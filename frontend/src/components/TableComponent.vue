<template>
    <div>
        <table class="border-2 border-black h-16 w-9/12">
            <thead class="border-2 border-black">
                <tr>
                    <th>Nome</th>
                    <th>Inicio</th>
                    <th>Termino</th>
                    <th>Valor</th>
                    <th>Risco</th>
                    <th>Participantes</th>
                    <th>Possivel retorno</th>
                </tr>
            </thead>
            <tbody>
                <tr class="pl-12">
                    <td>Teste</td>
                    <td>12/03/94</td>
                    <td>05/03/2001</td>
                    <td>2423423</td>
                    <td>Alto</td>
                    <td>Participants</td>
                    <td>Possievel retorno</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    data:() => ({

    }),
}
</script>
