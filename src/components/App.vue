<template>
    <div id="app" class="bg-dark-1">
        <NavBar />
        <OpenSource v-if="this.$store.getters.selectedSection === 'open-source'" />
        <Blog v-if="this.$store.getters.selectedSection === 'blog'" />
        <About v-if="this.$store.getters.selectedSection === 'about'" />
        <Home v-if="this.$store.getters.selectedSection === 'home'" />
        <Footer />
    </div>
</template>

<script>
    import NavBar from "./NavBar.vue";
    import OpenSource from "./open-source/OpenSource.vue";
    import Blog from "./blog/Blog.vue";
    import About from "./about/About.vue";
    import Home from "./home/Home.vue";

    export default {
        name: "app",

        components: {
            NavBar,
            OpenSource,
            Blog,
            About,
            Home
        },

        computed: {
            page: function() {
                return "open-source";
            }
        },

        methods: {
            switchPage: page => {
                this.currentPage = page;
            }
        },

        data: () => {
            return {
                currentPage: "open-source"
            };
        }
    };
</script>

<style lang="scss">
    @import "../style/main.scss";

    a {
        color: white !important;
    }

    a:hover {
        color: darker(20%) !important;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-bottom: 100px !important;
    }
</style>
