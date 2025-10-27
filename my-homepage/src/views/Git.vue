<template>
    <CommandInfo :title="'Git Commands'" :command="'git init'" :explain="'Initialize a new Git repository'"></CommandInfo>
</template>

<script>
import CommandInfo from '@/parts/CommandInfo.vue';
export default {
    name: "Git",
    components: {
        CommandInfo
    }
};
</script>