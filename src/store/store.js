import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            prenom: '',
            nom: '',
            age: ''
        }
    },
    mutations: {
        setUser(state, user) {
            state.user.prenom = user.prenom;
            state.user.nom = user.nom;
            state.user.age = user.age;
        }
    }
});
