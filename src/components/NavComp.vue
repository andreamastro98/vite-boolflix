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
            <div class="container">
                <a class="navbar-brand">
                    <img height="35" src="../../images/Netflix_Logo_RGB.png" alt="logo netflix">
                </a>
                <form class="d-flex" role="search">
                    <input v-model="store.testoRicerca"
                    class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button @click.prevent="$emit('search')"
                    class="btn btn-outline-danger" type="submit">
                    <i class="fa-solid fa-magnifying-glass" style="color: #ff0000;"></i>
                    </button>
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