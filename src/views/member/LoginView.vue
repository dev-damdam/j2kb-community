<template>
  <div class="login-view-wrapper">
    J2KB OPEN BOARD
    <b-button @click="openJ2KBNotion">J2KB Notion 바로가기</b-button>
    <b-input v-model="email" placeholder="ID"></b-input>
    <b-input v-model="password" placeholder="PASSWORD"></b-input>

    회원이 아니신가요? <b-button @click="moveRegisterView">Sign Up</b-button>
  </div>
</template>
<script>
export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    moveRegisterView() {
      this.$router.push("/register");
    },

    openJ2KBNotion() {
      // todo something
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view-wrapper {
  width: 100%;
}
</style>
