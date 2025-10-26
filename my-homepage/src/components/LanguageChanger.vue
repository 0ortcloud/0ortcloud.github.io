<template>
  <select v-model="language" @change="changeLanguage">
    <option value="ja">日本語</option>
    <option value="en">English</option>
    <option value="ko">한국어</option>
  </select>
</template>

<script>
export default {
  name: 'LanguageChanger',
  props: {
    modelValue: {
      type: String,
      default: 'ja'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    language: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', val) }
    }
  },
  methods: {
    changeLanguage() {
      this.$emit('update:modelValue', this.language)
    }
  }
}
</script>