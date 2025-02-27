import axios from 'axios'

const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1'
});
const api2  = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export async function getPerguntas() {
    try{
        const response = await api.get()
        return response.data
    }catch(error){
        console.error('erro ao pegar a pergunta', error);
        throw error;
    }
    
}

export async function getJSon(id) {
    try{
        const response = await api2.get(`posts/${id}`)
      
        return response.data
    }catch(error){
        console.error('erro ao pegar dados', error);
        throw error;
    }
    
}