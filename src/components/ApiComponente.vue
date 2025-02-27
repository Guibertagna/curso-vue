<template>
    <div>
        <h4>Digite o número do id do post que queira procurar</h4>
     <input v-model="idpost">
     <h1>Titulo: {{ posts.title }}</h1>
     <h2>Corpo do texto do post do usuário de id {{ posts.id }}</h2>
     
     <h5>{{ posts.body}}</h5>
     <button @click="getpost()">BUSCAAA</button>
    </div>

</template>
<script setup>
    import { ref, onMounted } from 'vue';
    import { getJSon } from '@/services/HttServce';
    const posts = ref([])
    const idpost = ref(0)
async function getpost() {
    console.log(idpost.value)
    const data = await getJSon(idpost.value)  
    posts.value = data
    console.log(posts.value)
}
    onMounted(()=>{
      
    })
</script>

<style>

</style>
