<template>
    <div class="container">
        <div class="quadro">
            <h1>Quadro de tarefas</h1>
            <input type="text" v-model="novaTarefa">
            <button @click="adicionarTarefa">Enviar</button>
            <div class="itens">
                <li v-for="(item) in itens" :key="item.id" :class="{done: item.concluido}" @click="concluido(item)">
                    {{ item.descricao }}
                </li>
            </div>
            <button @click="clear(itens)" v-if="itens.length > 0">Limpar</button>
            <div class="instrucoes">
                <h4>Instruções:</h4>
                <ul>
                    <li>Clique na tarefa para marcá-la como concluída</li>
                    <li>Use o botão Limpar para tirar as tarefas</li>
                    <li>Use o input para adicionar tarefas</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';

const itens = ref([
    { id: 1, descricao: "Estudar Vue.js", concluido: true },
    { id: 2, descricao: "Praticar JavaScript", concluido: false }
]);

const novaTarefa = ref("");

onUpdated()
function atualiza(){
    const storeItems = localStorage.getItem("itens")
    itens.value = storeItems ? JSON.parse(storeItems) : []
}
onMounted(falamontado)

function falamontado(){
    const storeItems = localStorage.getItem("itens")

    itens.value = storeItems ? JSON.parse(storeItems) : []
} 


function concluido(item) {
    item.concluido = !item.concluido;
}

function adicionarTarefa() {
    if (novaTarefa.value !== "") {
        itens.value.push({
            id: itens.value.length + 1,
            descricao: novaTarefa.value,
            concluido: false
        });
        novaTarefa.value = ""; 
        localStorage.setItem("itens", JSON.stringify(itens.value));
    }
}

function clear() {
    itens.value.splice(0, itens.value.length);
    localStorage.clear(itens)
}
</script>

<style scoped>
.instrucoes {
    padding-top: 30px;
}
.done {
    text-decoration: line-through;
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
.instrucoes {
    text-align: start;
}
input {
    margin-right: 5px;
}
</style>
