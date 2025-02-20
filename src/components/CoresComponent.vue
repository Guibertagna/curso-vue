<template>
    <div class="container">
        <div class="camaleao" :style="{'background-color': selecionaCor}">
        <input type="color" v-model="selecionaCor">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const selecionaCor = ref('');
</script>

<style> 
   
</style>