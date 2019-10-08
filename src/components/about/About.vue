<template>
    <div>
        <b-card>
            <b-card-header>Bence László</b-card-header>
            <b-card-body></b-card-body>
            <b-card-footer></b-card-footer>
        </b-card>

        <b-card>
            <b-card-header>Education</b-card-header>
            <b-card-body>
                <b-list-group>
                    <b-list-group-item>University of Miskolc [2016-2019], Bachelor's of Science - Computer Science</b-list-group-item>
                    <b-list-group-item>GitLab</b-list-group-item>
                    <b-list-group-item>ANSI C, shell script, bash, HTML, CSS, Java, OOP, IPC, TeX, LaTeX, SQL</b-list-group-item>
                    <b-list-group-item>Pascal, HTML, CSS, Python (2012-2016) Ózdi József Attila Gimnázium - Informatika</b-list-group-item>
                </b-list-group>
            </b-card-body>
        </b-card>

        <b-card>
            <b-card-header>Contact</b-card-header>
            <b-card-body></b-card-body>
            <b-card-footer>
                <b-list-group horizontal>
                    <b-list-group-item class=".flex-fill ml-auto">
                        <github-icon size="2x" />
                        <span class="ml-2">GitHub</span>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill">
                        <gitlab-icon size="2x" />
                        <span class="ml-2">GitLab</span>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill">
                        <linkedin-icon size="2x" />
                        <span class="ml-2">LinkedIn</span>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill">
                        <mail-icon size="2x" />
                        <span class="ml-2">Email</span>
                    </b-list-group-item>
                    <b-list-group-item class=".flex-fill mr-auto">
                        <message-circle-icon size="2x" />
                        <span class="ml-2">Matrix</span>
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

<style scoped>
</style>