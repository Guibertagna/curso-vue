<template>
    <div @click="mostrarPai" >
        <p> Contador {{ contador }}</p>
        <button @click="incrementar" >Incrementar componente filho</button>
        <br>
        <button @click="decrementar" >Decrementar componente filho</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    
    const contador = ref (0);    
    function incrementar (){
        contador.value++;
    }
    function decrementar (){
        contador.value--;
    }

    const emit = defineEmits(['conta'])
        function mostrarPai(){
                emit ('conta', contador.value)
        }
</script>