<template>
    <div>
    
    <ul>
        <li v-for="(carros) in carros" :key="carros.id">Modelo: {{ carros.modelo}} -> Marca: {{ carros.marca }}</li>
    </ul>
    </div>
</template>


<script setup>
    
    const carros = [
        {
        id: 1,
        modelo: 'Impreza',
        marca: 'Subaru'
    },
    {
        id: 2,
        modelo: 'RS6',
        marca: 'Audi'
    },
    {
        id: 3,
        modelo: 'Opala',
        marca: 'GM Brasil'
    },

    ]
</script>



<style>

</style>