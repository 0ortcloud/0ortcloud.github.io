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
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.language
      localStorage.setItem('lang', this.language)
    }
  },
  mounted() {
    const saved = localStorage.getItem('lang')
    if (saved) {
      this.$emit('update:modelValue', saved)
      this.$i18n.locale = saved
    }
  }
}
</script>