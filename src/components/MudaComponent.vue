<template>
    <div>
        <button @click="desaparece">Desaparecer (filho)</button>
        <h2 v-if="esconde">Componente filho</h2>
    </div>
</template>


<script setup>

const emit = defineEmits(['esconde'])

function desaparece() {
    emit('esconde')
}

defineProps({
    esconde: Boolean,
    
});
</script>
