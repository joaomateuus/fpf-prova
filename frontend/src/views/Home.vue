<template>
  <div class="md:flex flex-row justify-start bg-gradient-to-b from-green-300 to-green-800">
    <div class="md:flex flex-col justify-start items-center bg-black h-screen w-96 pt-4">
      <img class="h-16 w-42" src="../assets/img/logo.png" alt="">
      <div>
        <nav>
          <button class="text-green-800 font-bold border-2 border-white h-12 w-44 mt-4 rounded-md bg-white">
            <router-link to="/cadastro">Cadastrar Projeto</router-link> 
          </button>
        </nav>
      </div>
    </div>
    <div class="md:flex flex-col justify-start items-center pt-8 w-screen "> 
      <div class="md:flex flex-col pt-12 w-9/12 min-h-full bg-white pl-40 w-11/12 rounded-md">
        <h1 class="ml-36 text-2xl font-bold">Projetos em Andamento</h1>
        <TableComponent class="mt-4 h-fit w-fit" />
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue';

export default {
  name: 'Home',
  components: {
    TableComponent
  },
  data:() => ({

  }),
 
}
</script>
