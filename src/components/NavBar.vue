<template>
    <header class="bg-dark" :class="$isMobile() ? 'margin-top-150' : 'margin-bottom-150'">
        <b-navbar :class="$isMobile() ? 'fixed-bottom' : 'fixed-top'" type="dark" variant="dark">
            <b-navbar-brand>Bence László</b-navbar-brand>
            <b-nav-item v-on:click="selectSection('home')">
                <div v-if="$isMobile()">
                    <home-icon size="2x" />
                </div>
                <div v-else>
                    <home-icon size="3x" />
                    <span class="ml-12">Home</span>
                </div>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('open-source')">
                <div v-if="$isMobile()">
                    <code-icon size="2x" />
                </div>
                <div v-else>
                    <code-icon size="3x" />
                    <span class="ml-2">Open Source Contributions</span>
                </div>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('blog')">
                <div v-if="$isMobile()">
                    <book-open-icon size="2x" />
                </div>
                <div v-else>
                    <book-open-icon size="3x" />
                    <span class="ml-2">Blog</span>
                </div>
            </b-nav-item>
            <b-nav-item v-on:click="selectSection('about')">
                <div v-if="$isMobile()">
                    <info-icon size="2x" />
                </div>
                <div v-else>
                    <info-icon size="3x" />
                    <span class="ml-2">About</span>
                </div>
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

<style lang="scss">
    @import "../style/main.scss";

    .margin-top-100 {
        margin-top: 150px !important;
    }

    .margin-bottom-150 {
        margin-bottom: 150px !important;
    }

    body {
        background-color: #c18f41 !important;
    }
</style>