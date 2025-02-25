<template>
  <div class="container">
    <PerguntasComponents />
  </div>
</template>
  
  <script setup>
import PerguntasComponents from "@/components/PerguntasComponents.vue";
</script>
  
  <style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda a altura da tela */
  width: auto; /* Opcional: ocupa toda a largura da tela */
}
</style>
  