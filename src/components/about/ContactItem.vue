<template>
    <b-list-group-item class=".flex-fill mr-auto">
        <span class="ml-2">{{ name }}</span>
    </b-list-group-item>
</template>

<script>
    export default {
        name: "ContactItem",

        props: {
            name: {
                type: String,
                default: ""
            },
            icon: {
                type: String,
                default: 'message-circle-icon size="2x"/>'
            }
        }
    };
</script>

<style scoped lang="scss">
</style>