<template>
    <a @click="buttonFunction">{{ buttonText }}</a>
</template>
<script setup>
defineProps({
  buttonText: String,
  buttonFunction: Function,
})
</script>

<style>
  a {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  @media (hover: hover) {
    .headerButtons a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
      cursor: pointer;
    }
  }
</style>