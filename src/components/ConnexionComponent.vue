<template>
    <div class="login-container">
        <input v-model="prenom" placeholder="Prénom" class="login-input">
        <input v-model="nom" placeholder="Nom" class="login-input">
        <input v-model="age" placeholder="Age" class="login-input">
        <button @click="login" class="login-button">Connexion</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                prenom: '',
                nom: '',
                age:''
            }
        },
        methods: {
            login() {
                this.$store.commit('setUser', { prenom: this.prenom, nom: this.nom, age: this.age });
                this.$router.push('/accueil');
            }
        }
    }
</script>

<style scoped>
    @import './Component.css';
</style>

