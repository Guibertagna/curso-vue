<template>
    <div class="container">
        <div class="app">
            <h1 class="pergunta" v-html="question"></h1>
            <div class="inputs">
                <div  class="respostas" v-for="(perguntas, index) in allAnswers" :key="index">
                    <input :disabled="respostaEnviada" v-model="alternativa" type="radio" name="options" :value="perguntas" /><label >{{ perguntas }}</label>
                </div>
            </div>
            <button class="enviar" @click="enviarResposta"  type="button">Enviar</button>
        </div>
    </div>
</template> 

<script setup>

import { ref, onMounted } from "vue";
import { getPerguntas } from "@/services/HttServce";
const alternativa = ref(""); 
const question = ref(""); 
const respostaEnviada = ref(false);
const incorrectAnswers = ref([]); 
const correctAnswer = ref("");
const allAnswers = ref([]); // Define allAnswers como uma referência reativa

function juntaTudo() {
    allAnswers.value = [...incorrectAnswers.value]; // Atualiza allAnswers
    allAnswers.value.splice(Math.round(Math.random() * allAnswers.value.length), 0, correctAnswer.value);
    console.log(allAnswers.value);
}
function enviarResposta(){
    if(alternativa.value === ""){
        alert("selcione alguma opção!");
    }else{

        respostaEnviada.value = true
        console.log(respostaEnviada.value)
        if(alternativa.value == correctAnswer.value){
            alert("Acertou!")
        }else{
            alert("Errou!")
        }

    }
}
async function requisicao() {
    const data = await getPerguntas()
    console.log(data)
    question.value = data.results[0].question
    correctAnswer.value = data.results[0].correct_answer
    incorrectAnswers.value = data.results[0].incorrect_answers;
    juntaTudo();
}

onMounted(()=>{
    requisicao()
});
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

