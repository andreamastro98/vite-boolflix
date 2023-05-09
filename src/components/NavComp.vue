<script>
    import { store } from '../store';

    export default {
        name:'NavComp',
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div>
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand">Boolfix</a>
                <form class="d-flex" role="search">
                    <input v-model="store.testoRicerca"
                    class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button @click="$emit('search')"
                    class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

.navbar-brand{
    color: red;
}

</style>