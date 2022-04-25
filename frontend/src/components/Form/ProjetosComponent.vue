<template>
    <div class="md:flex flex-col justify-start items-center h-full">
        <form action="#" @submit.prevent="submit" class="md:flex flex-col mt-4 h-1/2 w-3/4 p-8 bg-white rounded-md">
            <div class="md:flex flex-row justify-evenly pt-2">
                <label for="" class="mt-4 text-black">Inicio</label>
                <input class="text-black rounded-md h-8 mt-2 ml-4 w-fit pl-2 border border-black" type="date" v-model="dataInicio">
                <label for="" class="mt-4 text-black ml-4">Termino</label>
                <input class="text-black rounded-md h-8 mt-2 ml-4 w-fit pl-2 border border-black" type="date" v-model="dataTermino">
            </div>
            <div class="md:flex flex-col justify-around pt-4">
                <label class="text-black mt-6" for="">Qual o risco do projeto?</label>
                <select class="border border-black rounded-md h-8 pl-2" name="risco" v-model="risco">
                    <option class="text-black" value="0">0-Baixo</option>
                    <option class="text-black" value="1">1-Médio</option>
                    <option class="text-black" value="2">2-Alto</option>
                </select>
            </div>
            <label  class="text-black mt-6" for="">Nome do Projeto</label>
            <input class="text-black rounded-md h-8 mt-2 border border-black pl-2" type="text" v-model="nome">
            <label for="" class="mt-6 text-black">Valor</label>
            <input class="text-black rounded-md h-8 mt-2 border border-black pl-2" type="number" v-model="valor">
            <label  class="text-black mt-6" for="">Participantes</label>
            <input class="text-black rounded-md h-8 mt-2 border border-black pl-2" type="text" v-model="participantes">
            
            <button class="mt-8 h-12 w-42 bg-blue-700 text-white text-xl rounded-md hover:bg-green-300">Salvar</button>
        </form>
        <div class="md:flex flex-row ml-6 mt-8">
            <h1 class=" text-white text-2xl font-bold text-black font-sans">Possivel retorno:</h1>
            <span class="text-white text-3xl font-serif ml-2 text-green-800">R$: {{ retorno }}</span>
        </div>
    </div>
        
 <!--
     
    -->
</template>

<script>
import Simulacao from './SimulacaoComponent.vue'
export default {
    name:'Projetos',
    components:{Simulacao},
    props: ["retorno"],
    data:() => ({
        dataInicio:null,
        dataTermino:null,
        risco:null,
        nome:null,
        valor:null,
        participantes:null,
    }),
    methods: {
        //mandando os dados ao componenente pai
        submit(){
            parseFloat(this.valor);
            parseInt(this.riscoProj);
            this.$emit('to-api', this.$data);
        },
       
    }
}
</script>

<style scoped>
label{
    font-family: 'roboto', sans-serif;
    font-weight: 300;
}
input{
    font-family: 'roboto', sans-serif;
    font-weight: 700;
}
</style>
