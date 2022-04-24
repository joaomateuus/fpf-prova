<template>
   <div class="md:flex flex-col rounded-md items-start h-fit w-full bg-white mt-4">
        <div class="md:flex flex-col items-start h-fit rounded-md p-6">
            <label class="text-black mt-6 font-sans" for="">Qual o risco do projeto?</label>
            <select class="border border-black rounded-md h-8 pl-2" v-model="risco" name="" id="">
                <option class="text-black" value="0">Baixo</option>
                <option class="text-black" value="1">Médio</option>
                <option class="text-black" value="2">Alto</option>
            </select>
            <label class="mt-4 text-black font-sans" for="">Valor do projeto</label>
            <input v-model="valor" type="text" class="h-8 w-52 pl-2 border border-black rounded-md mt-2">
            <div class="md:flex flex-row items-center">
                <button @click="calculando()" class="mt-6 h-12 w-52 bg-blue-700 text-white text-xl rounded-md font-sans">Calcular</button>
                <button @click="limpando()" class="mt-6 ml-4 h-12 w-52 bg-red-700 text-white text-xl rounded-md font-sans">Limpar</button>
            </div>
            <div class="md:flex flex justify-center mt-8">
                <h1 class="text-2xl text-red-800 font-sans">Estimativa esperada:</h1>
                <span class="text-3xl text-black ml-4 font-serif"> R${{ retorno }} </span> 
                <button class="h-12 w-52
                mt-4 ml-12 mb-8 bg-green-500 
                text-black text-xl rounded-md font-sans hover:bg-blue-700 hover:text-white" @click="$emit('salvar-retorno', retorno)">Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Simulacao',
    emits:["salvar-retorno"],
    data:()=>({
        risco:'',
        valor:'',
        retorno:0,
    }),
    methods: {
        //calculando o retorno de acordo com o input e suas respectivas regras de négocio
        calculando(){
            parseInt(this.risco);
            if(this.risco == 0){
                this.retorno = (parseFloat(this.valor)*5)/100;
                return this.retorno
            }
            if(this.risco == 1){
                this.retorno = (parseFloat(this.valor)*10)/100;
                return this.retorno
            }
            else if(this.risco == 2){
                this.retorno = (parseFloat(this.valor)*20)/100;
                return this.retorno
            }
            return this.retorno
        },
        //limpando a tela caso assim desejado
        limpando(){
            const deleting = prompt('Voce deseja realmente excluir ? (sim ou não)')
            if(deleting == 'sim'){
                this.risco='';
                this.valor='';
                this.retorno = 0;
            }
            this.risco = this.risco;
            this.valor = this.valor;
            this.retorno = this.retorno;
        },
        //enviando os dados ao componente pai para ser exibido no form
        salvando(){
            this.$emit('salvar-retorno', this.retorno);
        }

    }
}
</script>

<style scoped />
