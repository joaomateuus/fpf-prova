//Arquivo responsável por inciar o axios e suas requisições a baseURL
import axios from axios;

export default() => axios.create({
    //'A base URL é o endpoint da Api onde iremos manter nossa comunicação'
    baseURL:''
});