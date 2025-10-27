<template>
  <div class="header">
    <div class="headerImg">
      <a @click="goToMain"><img src="../assets/commandHubLogo.png" alt="Logo"/></a>
    </div>

    <div class="headerButtons">
      <HeaderButton :buttonText="headerMenu[0]" :buttonFunction="goToMac"/>
      <HeaderButton :buttonText="headerMenu[1]" :buttonFunction="goToWindows"/>
      <HeaderButton :buttonText="headerMenu[2]" :buttonFunction="goToGit"/>
      <HeaderButton :buttonText="headerMenu[3]" :buttonFunction="goToOther"/>
    </div>

    <div class="headerController">
      <LightModeSwitch />
      <LanguageChanger v-model="language"></LanguageChanger>
    </div>
  </div>
</template>

<script>
import HeaderButton from '../components/HeaderButton.vue';
import LanguageChanger from '@/components/LanguageChanger.vue';
import LightModeSwitch from '@/components/LightModeSwitch.vue';

export default {
  name: 'Header',
  components: {
    HeaderButton,
    LanguageChanger,
    LightModeSwitch
  },
  computed: {
    headerMenu() {
      return [
        this.$t('header.mac'),
        this.$t('header.windows'),
        this.$t('header.git'),
        this.$t('header.other')
      ]
    }
  },
  data() {
    return {
      language: 'ja'
    }
  },
  methods: {
    goToMain() { this.$router.push('/'); },
    goToMac() { this.$router.push('/mac'); },
    goToWindows() { this.$router.push('/windows'); },
    goToGit() { this.$router.push('/git'); },
    goToOther() { this.$router.push('/other'); }
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  background-color: var(--vt-c-dark-header);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
}

.headerImg {
  background-color: var(--vt-c-white-mute);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  min-width: 52px;
  max-width: 108px;
  height: 42px;
  justify-content: center;
}

.headerImg img {
  width: 42px;
  height: auto;
}

.headerButtons {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
}

.headerController {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>