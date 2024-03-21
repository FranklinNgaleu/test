<template>
    <div class="login-container">
        <input class="login-input" v-model="prenom" placeholder="Prénom" >
        <input class="login-input" v-model="nom" placeholder="Nom">
        <input class="login-input" v-model.number="age" type="number" placeholder="Age">
        <button class="login-button" @click="login" >Connexion</button>
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

