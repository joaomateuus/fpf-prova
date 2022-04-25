<template>
  <div class="container">
    <table class="rwd-table">
      <tbody>     
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Inicio</th>
          <th>Termino</th>
          <th>Valor</th>
          <th>Risco</th>
          <th>Participantes</th>
          <th>Ações</th>
        </tr>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>{{ projeto.dataInicio }}</td>
          <td>{{ projeto.dataTermino }}</td>
          <td>{{ projeto.valor }}</td>
          <td>{{ projeto.risco }}</td>
          <td>{{ projeto.participantes }}</td>
          <td>
            <router-link to="Editar">
              <button class="h-8 w-16 bg-blue-300 rounded-md">Editar</button>
            </router-link>
            <button class="h-8 w-16 bg-red-500 rounded-md mt-2" @click="deletingProjeto">Excluir</button>
          </td>
          </tr>
      
      </tbody>
    </table>
  </div>
</template>

<script>
import ProjetosService from '../services/ProjetosService';

export default {
  name: 'TableComponent',
  emits:["emit-update"],
  data:() => ({
    projetos: [],

  }),
  methods: {
    //Pega a resposta transforma em um novc array
    async gettingProjetos(){
      const response = await ProjetosService.getProjetos();
      this.projetos = { ...response}
    },
    //espera a resposta da requisição e atualiza a lista
    async deletingProjeto(){
      await ProjetosService.deleteProjeto();
      this.gettingProjetos();
    },
    
  },
  //usando o hooks do ciclo de vida do vue para atualizar a lista; 
  mounted(){
    this.gettingProjetos();
  }
}
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:600,700';

* {font-family: 'Open Sans', sans-serif;}

.container {
  display: block;
  text-align: center;
}

.rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #6acf91;
  color: black;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: .5em;
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: .4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: .5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}

</style>