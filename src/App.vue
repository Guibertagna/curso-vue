<template>
  <div class="container">
    <div class="direito">
      <h1>  Exercício 1</h1>
    <SegundoComponente nome="Guilherme" />
    <h1>  Exercício 2 </h1>
    <ContadorComponente @conta="contador" />
    <p v-if="!muda">se passar de 10 isso fica vermelho</p>
    <p v-else class="vermelho">se passar de 10 isso fica vermelho</p>
    <h1>  Exercício 3</h1>
    <MudaComponent :esconde="esconde"  @esconde="desaparce" />
    <h2 v-if="esconde">Componente Pai</h2>
    <button @click="esconde= true">Exibir(Pai)</button>
    </div>
    <div class="direito">
      <h1>Exercício 4</h1>
      <ListaComponente/>
      <CoresComponent/>
      
        

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListaComponente from './components/ListaComponente.vue';
import ContadorComponente from './components/ContadorComponente.vue';
import SegundoComponente from './components/SegundoComponente.vue';
import MudaComponent from './components/MudaComponent.vue';
import CoresComponent from './components/CoresComponent.vue';

const contadorValor = ref(0);
const muda = ref(false);
const esconde = ref(false); // Adicionando a variável hiden corretamente
function desaparce(){

  esconde.value = false;
}
function contador(varia) {
  contadorValor.value = varia;
  muda.value = contadorValor.value >= 10;
}
</script>

<style>
.container{
  padding: 10px;
  height: 100vh;
  display: flex;
  justify-content: space-between;

}

.vermelho {
  color: red;
}
</style>
