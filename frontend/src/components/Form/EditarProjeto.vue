<template>
    <div class="bg-gradient-to-b from-green-300 to-green-800 h-full">
        <div class="md:flex flex-col justify-start items-center pt-8 ">
            <form action="#" @submit.prevent="submit" class="md:flex flex-col mt-4 h-1/2 w-3/4 p-8 bg-white rounded-md">
                <div class="md:flex flex-row pt-2">
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
        </div>
    </div>
</template>

<script>
export default {
    name:'EditarProjeto',
    data:() => ({
        projetos: [],
    }),
   
}
</script>

<style>

</style>