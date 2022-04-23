//Arquivo responsável pelos métodos de requisão via htttp
import Api from './Api';

export default{
      //método responsável pelo cadastro
      async createNewProjeto(){
        try {
            const response = await Api().post('/projetos', projetos);
            return response.data; 
        } catch (error) {
            console.log(error);
        }
    },
    //método responsável pela listagem
    async getProjetos(){ 
        try {
            const response = await Api().get('/projetos');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
  
    //método que atualiza projeto pelo id
    async updateProjetos(id) {
        try {
            const response = await Api().put(`/projetos/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    //método responsável por excluir
    async deleteProjeto(id){
        try {
            const response = await Api().delete(`/projetos/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
}