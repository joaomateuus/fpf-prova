<template>
    <div class="wrapper bg-gradient-to-b from-green-300 to-green-800">
        <div class="login-wrap">
            <div class="login-html">
                <input @click="handlingtab1" id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Cadastro de Projetos</label>
                <input @click="handlingtab2" id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Simulação de Retorno</label>
                <div class="login-form">
                    <Simulacao @salvar-retorno="pegandoRetorno" v-show="simu"/>
                    <Projetos @to-api="toApi" :retorno="retorno" v-show="projetosTab" />
                </div>
            </div>     
        </div>
    </div>
</template>

<script>
import Projetos from '../components/Form/Projetos.vue'
import Simulacao from '../components/Form/Simulacao.vue'

import ProjetosService from '../services/ProjetosService';

export default {
    name:'Cadastro',
    components: {
        Projetos, Simulacao
    },
    computed: {

    },
    data:() => ({
        projetosTab:true,
        simu:false,
        retorno: '',
        projetos:{},
    }),
    methods:{
        //função para lidar com estado de componentes
        handlingtab1(){
            this.projetosTab = true;
            this.simu = false;
        },
        handlingtab2(){
            this.simu = true;
            this.projetosTab = false
        },
        //função para pegar retorno de investimento no componente filho
        pegandoRetorno(r) {
            this.retorno = r;
        },
        //salvando os dados do form no componente pai 
        async toApi(obj){
            this.projetos = obj;
            console.log(this.projetos);
            try {
                await ProjetosService.createNewProjeto(this.projetos);
                this.$router.push({
                    name: 'Home',
                })
            } catch (error) {
                console.log(error);
            }
        },
        
    },
}
</script>

<style scoped>
.wrapper{
	margin:0;
	color:#6a6f8c;
	font:600 16px/18px 'Open Sans',sans-serif;
}

*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

</style>

<style src="../components/Form/style.css" />