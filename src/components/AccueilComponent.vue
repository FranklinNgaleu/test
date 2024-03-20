<template>
    <div class="welcome-container">
        <h1 class="welcome-title">Welcome <span class="highlight">{{ user.prenom }} {{ user.nom }}</span> de {{ user.age }} ans</h1>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    
    export default {
        computed: {
            user() {
                const store = useStore();
                return store.state.user;
            }
        }
    }
</script>

<style scoped>
    @import './Component.css';
</style>
