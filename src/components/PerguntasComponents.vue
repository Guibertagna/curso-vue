<template>
    <div class="container">
        <div class="app">
            <h1 class="pergunta" v-html="question"></h1>
            <div class="inputs">
                <div class="respostas" v-for="(perguntas, index) in allAnswers" :key="index">
                    <input type="radio" name="options" :value="perguntas" /><label>{{ perguntas }}</label>
                </div>
            </div>
            <button class="enviar" @click="juntaTudo" type="button">Enviar</button>
        </div>
    </div>
</template> 

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const question = ref(""); 
const incorrectAnswers = ref([]); 
const correctAnswer = ref("");
const allAnswers = ref([]); // Define allAnswers como uma referência reativa
const api = "https://opentdb.com/api.php?amount=1&category=18";

function juntaTudo() {
    allAnswers.value = [...incorrectAnswers.value]; // Atualiza allAnswers
    allAnswers.value.splice(Math.round(Math.random() * allAnswers.value.length), 0, correctAnswer.value);
    console.log(allAnswers.value);
}

function requisicao() {
    axios.get(api).then((response) => {
        const data = response.data.results[0];

        question.value = data.question;
        incorrectAnswers.value = data.incorrect_answers;
        correctAnswer.value = data.correct_answer;

        // Atualiza allAnswers quando os dados são carregados
        juntaTudo();
    })
    .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
    });
}

onMounted(requisicao);
</script>

<style scoped>
    .app {
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
    }
    .enviar {
        margin-top: 12px;
        height: 20px;
        min-width: 120px;
        padding: 0 16px;
        color: #ffff;
        border: 1px solid #1867c0;
        background-color: #1867c0;
        cursor: pointer;  
    }

    .inputs {
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
