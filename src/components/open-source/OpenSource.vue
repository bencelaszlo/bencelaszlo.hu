<template>
    <div class="bg-dark text-light">
        <h2>Open Source Contributions</h2>

        <b-card-group bg-dark>
            <OpenSourceProject
                class="h-100"
                v-for="project in projects"
                v-bind:key="project.name"
                v-bind="project"
            />
        </b-card-group>
    </div>
</template>

<script>
    import OpenSourceProject from "./OpenSourceProject";

    export default {
        name: "OpenSource",

        components: {
            OpenSourceProject
        },

        props: {},

        data: () => {
            return {
                projects: [
                    {
                        name: "KEECO",
                        contributorLevel: 'Minor contributor',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "Home Automation System.",
                        description: "Home Automation System.",
                        languages: ["JavaScript", "C++"],
                        license: "GPL-3.0",
                        githubRepositoryLink: "",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "randoom",
                        contributorLevel: 'Owner',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "CLI Random Data Generator.",
                        description:
                            "An easy-to-use CLI tool for generating random numbers, colors, characters and strings.",
                        languages: ["Rust"],
                        license: "GPL-3.0",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/randoom",
                        gitlabRepositoryLink:
                            "https://gitlab.com/bencelaszlo/randoom",
                        website: ""
                    },
                    {
                        name: "Bitter Boundaries",
                        contributorLevel: 'Owner',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "A small real-time strategy game",
                        description: "A small real-time strategy game where the main goal is to own every tile of the map.created to GitHub GameJam 2019. It has been ranked at 58th from the 227 entries.",
                        languages: ["Rust"],
                        license: "GPL-V3.0",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/bitter-boundaries",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "Cubique",
                        contributorLevel: 'Owner',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "3D Videogame",
                        description: "Cubique - 3D Videogame with OpenGL.",
                        languages: ["C"],
                        license: "",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/cubique",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "Habitica",
                        contributorLevel: 'Minor contributor',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "A habit tracker app which treats your goals like a Role Playing Game.",
                        description: "A habit tracker app which treats your goals like a Role Playing Game.",
                        languages: ["JavaScript"],
                        license: "Other",
                        githubRepositoryLink:
                            "https://github.com/HabitRPG/habitica",
                        gitlabRepositoryLink: "",
                        website: ""
                    }
                ]
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "../../style/main.scss";
</style>