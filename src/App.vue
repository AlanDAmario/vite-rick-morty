<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios';
export default {
    name: 'AppRIck&Morty',
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
        }
    },
    created() {
        axios.get(this.store.apiUrl).then((response) => {
            this.store.results = response.data.results
            this.store.info = response.data.info
        })
    },
}

</script>
<template>
    <AppMain/>
</template>
<style></style>

