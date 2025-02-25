<template>
    <div class="container">
        <router-link to="/" class="back-button">
            <span class="material-icons">arrow_back</span>
        </router-link>
        <div class="centrala">
            <ListaComponente></ListaComponente>
        </div>
    </div>
</template>

<script setup>
import ListaComponente from '@/components/ListaComponente.vue';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.centrala {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    text-decoration: none;
    font-size: 24px;
}
</style>
