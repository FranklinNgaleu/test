import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            firstName: '',
            lastName: ''
        }
    },
    mutations: {
        setUser(state, user) {
            state.user.firstName = user.firstName;
            state.user.lastName = user.lastName;
        }
    }
});
