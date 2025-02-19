<template>
  <div class="fundo">
    <SegundoComponente nome="Guilherme" />
    <ContadorComponente @conta="contador" />
    
    <p v-if="!muda">se passar de 10 isso fica vermelho</p>
    <p v-if="muda" class="vermelho">se passar de 10 isso fica vermelho</p>
    
    <MudaComponent :hiden="esconde" />
    <h1 v-if="esconde">aaaaa</h1>
    <button @click="mudar">Apareceu</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContadorComponente from './components/ContadorComponente.vue';
import SegundoComponente from './components/SegundoComponente.vue';
import MudaComponent from './components/MudaComponent.vue';

const contadorValor = ref(0);
const muda = ref(false);
const esconde = ref(false); // Adicionando a variável hiden corretamente

function mudar() {
  esconde.value = true; // Agora a variável hiden existe e pode ser alterada
}

function contador(varia) {
  contadorValor.value = varia;
  muda.value = contadorValor.value >= 10;
}
</script>

<style>
.vermelho {
  color: red;
}
</style>
