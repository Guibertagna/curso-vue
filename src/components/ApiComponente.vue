<template>
    <div class="container">
        <div>
            <h4>Digite o número do id do post que queira procurar</h4>
        <input v-model="idpost">
        <h1>Titulo: {{ posts.title }}</h1>
        <h2>Corpo do texto do post do usuário de id {{ posts.id }}</h2>
        <h3>{{ posts.content }}</h3>
        <button @click="getpost()">BUSCA</button>
        </div>
        <div>
            <input type="text" v-model="formData.content">
            <input type="text" v-model="formData.id">
            <input type="text" v-model="formData.title">
            <button @click="makepost">Enviar post</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gtePostId, postar } from '@/services/HttServce';
const posts = ref([]);
const idpost = ref(0);
const formData = ref({
    id: '',
    title: '',
    content: ''
});
async function getpost() {
    console.log(idpost.value);
    const data = await gtePostId(idpost.value);
    posts.value = data;
    console.log(posts.value);
}
async function makepost(formData) {
    await postar(JSON.stringify(formData))
    
}

onMounted(() => {});
</script>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    width: 100%;
    text-align: center;
}

input {
    margin: 10px 0;
    padding: 8px;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #3C3D37;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #697565;
}
</style>
