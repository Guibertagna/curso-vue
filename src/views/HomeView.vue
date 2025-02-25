<template>
  <div class="container">
  <router-link :to="{name: 'Dashboard'}"><button>Ir para o Dashboard</button></router-link>
  <router-link :to="{name: 'Carros'}"><button>Ir para lista de carros</button></router-link>
  <router-link :to="{name: 'Cores'}"><button>Ir para selecionador de cor</button></router-link>
  <router-link :to="{name: 'Tarefas'}"><button>Ir para Lista de tarefas</button></router-link>
  </div>
</template>


<script setup>
  
  
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