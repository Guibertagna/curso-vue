<template>
    <div>
        <router-link to="/" class="back-button" style="color: black;"><span class="material-icons">arrow_back</span> </router-link>
        <ListaComponente></ListaComponente>
    </div>
</template>

<script setup>
import ListaComponente from '@/components/ListaComponente.vue';
</script>