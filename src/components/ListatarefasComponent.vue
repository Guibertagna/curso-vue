<template>
    <div class="container">
        <div class="quadro">
            <h1>Quadro de tarefas</h1>
            <input type="text"><button>Enviar</button>
            <div class="itens">
                <li v-for="(itens) in itens" :key="itens.id"> {{ itens.desricao }}</li>
            </div>
           <div class="instrucoes">
            <h4>Instruções:</h4>
            <ul>
                <li>Clique na tarefa para marca-la como concluida</li>
                <li>Use o botão Limpar para tirar as tarefas</li>
                <li>Use o input para adicionar tarefas</li>
            </ul>
           </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const itens = ref ([
    {id:1, desricao:"Estudar Vuejs", concluido:false}
])
    
</script>

<style scoped>
.instrucoes{
    padding-top: 30px;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.quadro {
    text-align: start;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    width: 400px;
    height: auto;
}
.instrucoes{
    text-align: start;
}
input {
    margin-right: 5px;
}
</style>