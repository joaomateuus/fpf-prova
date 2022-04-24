//Arquivo responsável pelos métodos de requisão via htttp
import Api from './Api';

export default{
      //método responsável pelo cadastro http://localhost:8000/api/v1/projetos
      async createNewProjeto(projetos){
        try {
            const response = await Api().post('/projetos/', projetos);
            return response.data; 
        } catch (error) {
            return console.log(error);
        }
    },
    //método responsável pela listagem http://localhost:8000/api/v1/projetos
    async getProjetos(){ 
        try {
            const response = await Api().get('/projetos/');
            return response.data;
        } catch (error) {
            return console.log(error)
        }
    },
  
    //método que atualiza projeto pelo id http://localhost:8000/api/v1/projetos/:id
    async updateProjetos(id) {
        try {
            const response = await Api().put(`/projetos/${id}/`);
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },
    //método responsável por excluir http://localhost:8000/api/v1/projetos/:id
    async deleteProjeto(id){
        try {
            const response = await Api().delete(`/projetos/${id}/`);
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },
}