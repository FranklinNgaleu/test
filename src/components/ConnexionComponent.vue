<template>
    <div>
        <input v-model="firstName" placeholder="Prénom">
        <input v-model="lastName" placeholder="Nom">
        <button @click="login">Connexion</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: ''
            }
        },
        methods: {
            login() {
                this.$store.commit('setUser', { firstName: this.firstName, lastName: this.lastName });
                this.$router.push('/accueil');
            }
        }
    }
</script>
