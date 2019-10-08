<template>
    <header class="bg-dark">
        <b-navbar class="fixed-bottom" type="dark" variant="dark">
            <b-navbar-brand>Bence László</b-navbar-brand>
            <b-nav-item v-on:click="selectSection('home')">
                <home-icon size="3x" />
                <span class="ml-l2">Home</span>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('open-source')">
                <code-icon size="3x" />
                <span class="ml-2">Open source contributions</span>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('blog')">
                <book-open-icon size="3x" />
                <span class="ml-2">Blog</span>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('about')">
                <info-icon size="3x" />
                <span class="ml-2">About</span>
            </b-nav-item>
        </b-navbar>
    </header>
</template>

<script>
    import { BookOpenIcon, CodeIcon, HomeIcon, InfoIcon } from "vue-feather-icons";

    export default {
        name: "NavBar",

        components: {
            BookOpenIcon,
            CodeIcon,
            HomeIcon,
            InfoIcon
        },

        computed: {},

        methods: {
            selectSection(section) {
                this.$store.commit("selectSection", section);
            }
        },

        props: {}
    };
</script>

<style scoped>
</style>