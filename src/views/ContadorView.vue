<template>
<div>
    <h1>  Exercício 2 </h1>
    <ContadorComponente @conta="contador" />
    <p v-if="!muda">se passar de 10 isso fica vermelho</p>
    <p v-else class="vermelho">se passar de 10 isso fica vermelho</p>

</div>
</template>
<script setup>

import ContadorComponente from '@/components/ContadorComponente.vue';
import { ref } from 'vue';
const muda = ref(false);
function contador(varia) {
    contadorValor.value = varia;
    muda.value = contadorValor.value >= 10;
}
const contadorValor = ref(0);
</script>


<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
}

    .vermelho{
        color : red
    }
</style>