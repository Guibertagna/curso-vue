<template>
  <div class="container">
    <router-link to="/" class="back-button">
      <span class="material-icons">arrow_back</span>
    </router-link>
    <router-view ></router-view>
  </div>
</template>

<style>
  .back-button {
    position: fixed;
    top: 10px;
    left: 0%;
    padding: 8px;
  }
  .tudo{
    height: 100%;
    width: 100%;
  }

</style>
