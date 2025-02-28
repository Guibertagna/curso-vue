import axios from 'axios'

const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1'
});
const api2  = axios.create({
    baseURL: 'https://my-json-server.typicode.com/guiBertagna/server/'
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

export async function gtePostId(id) {
    try{
        const response = await api2.get(`posts/${id}`)
        return response.data
    }catch(error){
        console.error('erro ao pegar dados', error);
        throw error;
    }
}

export async function postar(post) {
    try{
        await api2.post('posts', post).then(response => console.log(response))
   }catch(error){
    console.error('erro ao enviar post',error);
    console.log(post)
    throw error;
   }
    
}