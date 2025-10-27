import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      mac: 'Mac',
      windows: 'Windows',
      git: 'Git',
      other: 'Other'
    }
  },
  ja: {
    header: {
      mac: 'Mac',
      windows: 'Windows',
      git: 'Git',
      other: 'その他'
    },
    contents: {},
    footer: {},
  },
  ko: {
    header: {
      mac: 'Mac',
      windows: 'Windows',
      git: 'Git',
      other: '기타'
    }
  }
}

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages
})

export default i18n