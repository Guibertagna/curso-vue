<template>
        <router-link to="/" class="back-button">
            <span class="material-icons">arrow_back</span>
        </router-link>
    <ListatarefasComponent/>
</template>


<script setup>
import ListatarefasComponent from '@/components/ListatarefasComponent.vue';




</script>

<style scoped>
    .container {
    display: flex;

    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
</style>