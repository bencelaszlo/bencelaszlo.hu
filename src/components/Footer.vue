<template>
    <footer class="bg-dark text-light fixed-bottom mb-40">Bence László - {{this.getCurrentYear()}}</footer>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            getCurrentYear() {
                return new Date().getFullYear();
            }
        }
    };
</script>

<style scoped>
    .mb-40 {
        margin-bottom: 4rem;
    }
</style>