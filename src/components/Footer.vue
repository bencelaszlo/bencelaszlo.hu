<template>
    <footer class="bg-dark text-light fixed-bottom">
        <ul>
            <li>Bence László - {{this.getCurrentYear()}}</li>
            <li>bencelaszlo@protonmail.com</li>
            <li>bencelaszlo.github.io</li>
        </ul>
    </footer>
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

<style scoped lang="scss">
</style>