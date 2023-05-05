<template>
    <h1>Zarejestruj się</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="text" placeholder="Hasło" v-model="password" /></p>
    <p><button @click="register">Zarejestruj</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log("Rejestracja przebiegła pomyślnie!");
        router.push('/feed')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
}


</script>