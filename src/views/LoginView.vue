<template>
    <h1>Zaloguj się!</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="text" placeholder="Hasło" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="login">Zaloguj</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const errMsg = ref();

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            if (email.value === "admin@admin.com") {
                console.log("Zalogowano się jako admin!");
                router.push('/admin');
            } else {
                console.log("Zalogowano się jako użytkownik zwykły!");
                router.push('/feed');
            }
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Niepoprawny adres email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "Użytkownik o podanym adresie email nie istnieje";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Nieprawidłowe hasło";
                    break;
                default:
                    errMsg.value = "Email lub hasło są nieprawidłowe";
                    break;
            }
        })
}


</script>