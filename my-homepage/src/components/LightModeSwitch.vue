<template>
  <label class="switch">
    <input type="checkbox" v-model="isLight" @change="toggleMode">
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: 'LightModeSwitch',
  data() {
    return {
      isLight: false
    }
  },
  mounted() {
    document.documentElement.classList.remove('light')
  },
  methods: {
    toggleMode() {
      const root = document.documentElement
      if (this.isLight) {
        root.classList.add('light')
      } else {
        root.classList.remove('light')
      }
    }
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 26px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #555;
  transition: 0.4s;
  border-radius: 26px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px; width: 20px;
  left: 3px; bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--vt-c-appleGreen)
}

input:checked + .slider:before {
  transform: translateX(20px);
}
</style>