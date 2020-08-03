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
                        shortDescription: "Central Hub of a Home Automation System",
                        description: "The central software which orchestrates all the hardware nodes and provides an API for the client access.",
                        languages: ["JavaScript", "C++"],
                        license: "GPL-3.0",
                        githubRepositoryLink: "https://github.com/KEECO-HomeAutomation/keeco-hub",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "randoom",
                        contributorLevel: 'Owner',
                        imgSrc: require("./../../assets/images/randoom.png"),
                        imgAlt: "Screenshot about an example usage of the randoom tool.",
                        shortDescription: "CLI Random Data Generator",
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
                        imgSrc: require("./../../assets/images/bitter_boundaries.png"),
                        imgAlt: "Bitter Boundaries - ingame screenshot",
                        shortDescription: "2D Real-Time Strategy Videogame",
                        description: "A small real-time strategy game where the main goal is to own every tile of the map. It was my submission to Github GameJam 2019 (ranked 58/228).",
                        languages: ["Rust"],
                        license: "GPL-V3.0",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/bitter-boundaries",
                        gitlabRepositoryLink: "",
                        website: "https://bencelaszlo.itch.io/bitter-boundaries"
                    },
                    {
                        name: "Cubique",
                        contributorLevel: 'Owner',
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "3D Videogame",
                        description: "3D Videogame developed using OpenGL.",
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
                    },
                    {
                        name: "bencelaszlo.hu",
                        imgSrc: require("./../../assets/images/bencelaszlo_hu.png"),
                        imgAlt: "Screenshot from this website.",
                        shortDescription: "This website",
                        description: "Website about me as a professional, blog and open source portfolio.",
                        languages: ["JavaScript", "Vue", "CSS"],
                        license: "",
                        githubRepositoryLink: "https://github.com/bencelaszlo/bencelaszlo.hu",
                        gitlabRepositoryLink: "",
                        website: "https://bencelaszlo.hu"
                    },
                    {
                        name: "Sweeter Boundaries",
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "3D city building game demo",
                        description: "3D city building game demo in Unity3D.",
                        languages: ["C#"],
                        license: "",
                        githubRepositoryLink: "https://github.com/bencelaszlo/sweeter-boundaries",
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