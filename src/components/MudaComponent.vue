<template>
    <div>
        <h2 v-if="hiden">Olá</h2>

    </div>
</template>


<script setup>
    defineProps({
    hiden: Boolean,
    });


</script>
