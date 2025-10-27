<template>
  <div class="commandInfo">
    <h1 class="minorCategory">{{ title }}</h1>
    <div class="commands">
      <CommandSpace :command="command" />
      <p v-if="explain" class="explain">{{ explain }}</p>
    </div>
  </div>
</template>

<script>
import CommandSpace from '@/components/CommandSpace.vue';

export default {
  name: "CommandInfo",
  components: { CommandSpace },
  props: {
    title: { type: String, required: true },
    command: { type: String, required: true },
    explain: { type: String, required: false }
  }
};
</script>

<style scoped>
.commandInfo {
  margin: 3rem;
  background-color: #2c2c3a;
  border: 1px solid #444;
  border-radius: 0.6rem;
  padding: 1.5rem;
  transition: background-color 0.3s, border-color 0.3s;
}

.minorCategory {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.commands {
  padding: 12px;
  border-radius: 4px;
  background-color: #1f1f2b;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.explain {
  font-size: 13px;
  color: #ccc;
  line-height: 1.4;
}
</style>