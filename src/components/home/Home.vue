<template>
    <div class="bg-yellow">
        <div class="h-100 w-75 ml-auto mr-auto">
            <b-jumbotron bg-variant="dark-1" text-variant="yellow">
                <template v-slot:header>{{ startModal.title }}</template>

                <template v-slot:lead>{{ startModal.lead }}</template>

                <hr class="my-4" />

                <p>{{ startModal.description }}</p>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        props: {},

        data: () => {
            return {
                startModal: {
                    title: 'Bence László',
                    lead: 'Software Developer',
                    description: ''
                }
            }
        },

    };
</script>

<style scoped>
    * {
        color: white;
    }
</style>