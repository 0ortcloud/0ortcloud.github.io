<template>
    <div class="commandInfo">
        <h3 class="minorCategory">Command Information</h3>
        <div class="commands">
            <CommandSpace :command="command"></CommandSpace>
        </div>
    </div>
</template>

<script>
import CommandSpace from '@/components/CommandSpace.vue';
    export default {
        name: "CommandInfo",
        components: {
            CommandSpace
        },
        props: {
            command: {
                type: String,
                required: true
            }
        }
    };
</script>

<style>
.commandInfo {
    margin: 20px 0;
    /* background-color: var(--vt-c-dark-soft); */
    background-color: black;
    border: 1px solid var(--vt-c-divider-light-1);
    border-radius: 0.5rem;
    padding: 3rem;
}

.minorCategory {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
}

.commands {
    padding: 12px;
    border-radius: 4px;
}
</style>