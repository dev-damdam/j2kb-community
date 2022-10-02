<template>
  <div class="register-view-wrapper">
    <b-input v-model="email" placeholder="이메일"></b-input>
    <b-input v-model="password" placeholder="비밀번호"></b-input>
    <b-input v-model="passwordCheck" placeholder="비밀번호 확인"></b-input>
    <b-input v-model="nickname" placeholder="별명"></b-input>
    <b-input v-model="quiz" placeholder="퀴즈"></b-input>
    <b-button @click="register">Sign Up</b-button>
  </div>
</template>
<script>
import utils from "@/assets/common/utils.js";
export default {
  name: "register-view",
  data() {
    return {
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      quiz: "",
      validateCheck: {
        email: {
          state: false,
          message: "",
        },
        password: {
          state: false,
          message: "",
        },
        passwordCheck: {
          state: false,
          message: "",
        },
        nickname: {
          state: false,
          message: "",
        },
        quiz: {
          state: false,
          message: "",
        },
      },
    };
  },
  methods: {
    register() {
      //1. validation check
      this.validateCheck.email = utils.emailValidation(this.email);
      if (!this.validateCheck.email.state) {
        alert(this.validateCheck.email.message);
        return;
      }

      this.validateCheck.password = utils.passwordValidation(this.password);
      if (!this.validateCheck.password.state) {
        alert(this.validateCheck.password.message);
        return;
      }

      this.validateCheck.passwordCheck = utils.passwordCheckValidation(
        this.password,
        this.passwordCheck
      );
      if (!this.validateCheck.passwordCheck.state) {
        alert(this.validateCheck.passwordCheck.message);
        return;
      }

      this.validateCheck.nickname = utils.nicknameValidation(this.nickname);
      if (!this.validateCheck.nickname.state) {
        alert(this.validateCheck.nickname.message);
        return;
      }

      this.validateCheck.quiz = utils.quizValidation(this.quiz, "케비");
      if (!this.validateCheck.quiz.state) {
        alert(this.validateCheck.quiz.message);
        return;
      }

      // todo : impl register
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
.register-view-wrapper {
  width: 100%;
}
</style>
