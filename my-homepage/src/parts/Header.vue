<template>
  <div class="header">
    <div class="headerImg">
      <a href="/"><img src="../assets/commandHubLogo.png" alt="Logo"/></a>
    </div>

    <div class="headerButtons">
      <HeaderButton :buttonText="headerMenu[0]" :buttonFunction="goToMac"/>
      <HeaderButton :buttonText="headerMenu[1]" :buttonFunction="goToWindows"/>
      <HeaderButton :buttonText="headerMenu[2]" :buttonFunction="goToGit"/>
      <HeaderButton :buttonText="headerMenu[3]" :buttonFunction="goToOther"/>
    </div>

    <div class="headerController">
      <div>라이트 모드</div>
      <LanguageChanger v-model="language"></LanguageChanger>
      <div>{{ language }}</div>
    </div>
  </div>
</template>

<script>
import HeaderButton from '../components/HeaderButton.vue';
import LanguageChanger from '@/components/LanguageChanger.vue';

export default {
  name: 'Header',
  components: {
    HeaderButton,
    LanguageChanger
  },
  data() {
    return {
      headerMenu: ['Mac', 'Windows', 'Git', 'Other'],
      language: 'ja'
    }
  },
  methods: {
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
  z-index: 1000;
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