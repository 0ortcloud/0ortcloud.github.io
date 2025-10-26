<template>
    <div class="commandSpace">
        <p>{{ command }}</p>
    </div>
</template>

<script>
export default {
    name: "CommandSpace",
    props: {
        command: String
    },
    data() {
        return {
            command: this.command,
        };
    },
};
</script>

<style>
    .commandSpace {
        font-family: 'Courier New', Courier, monospace;
        background-color: var(--vt-c-dark-soft);
        padding: 10px;
        border-radius: 5px;
    }
</style>