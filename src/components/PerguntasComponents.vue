<template>
<div class="container">
    <h1>AAAAAAAAAAAAAAA
    </h1>
    <div class="inputs">
       <div class="verdadeiro"> <input type="radio" name="options" value="True">Verdadeiro</div>

        <div class="falso"><input type="radio" name="options" value="False">Falso</div>
    </div>
    <button class="enviar" type="button">Enviar</button>
</div>
</template>

<script setup>

</script>


<style scoped>
.falso{
    margin-right: 40px;
}
.verdadeiro{
    margin-right: 40px;
}
.inputs{
    gap: 10px;
    justify-content: center;
  display: flex;
  
}
.container {
    align-content: center;
    margin-bottom: 100px;
 
    display: flex;
    text-align: center;
    flex-direction: column;
}


</style>