<template>
    <div>
        <div v-for="article in articles" :key="article.id">
            <h2>{{ article.title }} - {{ article.author }} - {{ article.date }}</h2>
            <latex :content="article.content" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",

        props: {},

        data: () => {
            return {
                articles: [
                    {
                        id: 0,
                        title: "title",
                        date: new Date("2019-10-08"),
                        author: "Bence László",
                        content: "content content"
                    },
                ]
            };
        }
    };
</script>

<style scoped>
    * {
        color: white;
    }
</style>