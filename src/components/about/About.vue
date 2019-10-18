<template>
    <div>
        <b-card class="bg-yellow">
            <b-card-header class="bg-orange">
                <h1>Bence László</h1>
            </b-card-header>
            <b-card-body class="bg-dark"></b-card-body>
            <b-card-footer class="bg-dark"></b-card-footer>
        </b-card>

        <b-card class="bg-yellow">
            <b-card-header class="bg-orange">
                <h2>Education</h2>
            </b-card-header>
            <b-card-body class="bg-dark">
                <b-list-group>
                    <b-list-group-item class="bg-yellow">
                        <span>University of Miskolc [2016-2019], Bachelor's of Science - Computer Science</span>
                    </b-list-group-item>
                    <b-list-group-item class="bg-orange">
                        <span>ANSI C, shell script, bash, HTML, CSS, Java, OOP, IPC, TeX, LaTeX, SQL</span>
                    </b-list-group-item>
                    <b-list-group-item class="bg-yellow">
                        <span>Pascal, HTML, CSS, Python (2012-2016) Ózdi József Attila Gimnázium - Informatika</span>
                    </b-list-group-item>
                </b-list-group>
            </b-card-body>
            <b-card-footer class="bg-dark"></b-card-footer>
        </b-card>

        <b-card class="bg-yellow">
            <b-card-header class="bg-orange">
                <h2>Contact</h2>
            </b-card-header>
            <b-card-body class="bg-dark"></b-card-body>
            <b-card-footer class="bg-dark">
                <b-list-group horizontal>
                    <b-list-group-item class=".flex-fill ml-auto bg-dark-2 text-light">
                        <div v-if="$isMobile()">
                            <github-icon size="1x" />
                        </div>
                        <div v-else>
                            <github-icon size="2x" />
                            <span class="ml-2">GitHub</span>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill bg-orange">
                        <div v-if="$isMobile()">
                            <gitlab-icon size="1x" />
                        </div>
                        <div v-else>
                            <gitlab-icon size="2x" />
                            <span class="ml-2">GitLab</span>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill bg-cyan">
                        <div v-if="$isMobile()">
                            <linkedin-icon size="1x" />
                        </div>
                        <div v-else>
                            <linkedin-icon size="2x" />
                            <span class="ml-2">LinkedIn</span>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill bg-green">
                        <div v-if="$isMobile()">
                            <mail-icon size="1x" />
                        </div>
                        <div v-else>
                            <mail-icon size="2x" />
                            <span class="ml-2">Email</span>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill mr-auto bg-teal">
                        <div v-if="$isMobile()">
                            <message-circle-icon size="1x" />
                        </div>
                        <div v-else>
                            <message-circle-icon size="2x" />
                            <span class="ml-2">Matrix</span>
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
    import {
        GithubIcon,
        GitlabIcon,
        MailIcon,
        MessageCircleIcon,
        LinkedinIcon
    } from "vue-feather-icons";

    export default {
        name: "About",

        components: {
            GithubIcon,
            GitlabIcon,
            MailIcon,
            MessageCircleIcon,
            LinkedinIcon
        },

        props: {}
    };
</script>

<style lang="scss">
</style>