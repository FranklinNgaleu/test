<template>
    <div>
        Welcome {{ user.firstName }} {{ user.lastName }}
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
