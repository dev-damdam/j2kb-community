<template>
  <div class="register-view-wrapper">
    <template-sign-in-main>
      <b-form class="register-form w-50 d-flex flex-column align-items-center">
        <b-input
          v-model="email"
          :state="validateCheck.email.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          placeholder="이메일"
        />
        <b-input
          type="password"
          v-model="password"
          :state="validateCheck.password.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          placeholder="비밀번호"
        />
        <b-input
          type="password"
          v-model="passwordCheck"
          :state="validateCheck.passwordCheck.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          placeholder="비밀번호 확인"
        />
        <b-input
          v-model="nickname"
          :state="validateCheck.nickname.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          placeholder="별명"
        />
        <b-input
          v-model="quiz"
          :state="validateCheck.quiz.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          placeholder="퀴즈"
        />
        <b-form-invalid-feedback id="input-live-feedback" class="w-75">
          {{ errorMessage }}
        </b-form-invalid-feedback>
        <b-button class="w-75 mt-5" @click="register">회원가입</b-button>
      </b-form>
    </template-sign-in-main>
    <template-sign-in-footer />
  </div>
</template>
<script>
import utils from "@/assets/common/utils.js";
import TemplateSignInFooter from "@/components/templates/TemplateSignInFooter.vue";
import TemplateSignInMain from "@/components/templates/TemplateSignInMain.vue";
import user from "@/assets/firebase/user";
export default {
  components: { TemplateSignInFooter, TemplateSignInMain },
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
          state: null,
          message: "",
        },
        password: {
          state: null,
          message: "",
        },
        passwordCheck: {
          state: null,
          message: "",
        },
        nickname: {
          state: null,
          message: "",
        },
        quiz: {
          state: null,
          message: "",
        },
      },
      errorMessage: "",
    };
  },
  methods: {
    initValidatedState() {
      this.validateCheck = {
        email: {
          state: null,
          message: "",
        },
        password: {
          state: null,
          message: "",
        },
        passwordCheck: {
          state: null,
          message: "",
        },
        nickname: {
          state: null,
          message: "",
        },
        quiz: {
          state: null,
          message: "",
        },
      };
    },
    formValidatedCheck() {
      // init validated state
      this.initValidatedState();

      this.validateCheck.email = utils.emailValidation(this.email);
      if (!this.validateCheck.email.state) {
        this.errorMessage = this.validateCheck.email.message;
        return false;
      }

      this.validateCheck.password = utils.passwordValidation(this.password);
      if (!this.validateCheck.password.state) {
        this.errorMessage = this.validateCheck.password.message;
        return false;
      }

      this.validateCheck.passwordCheck = utils.passwordCheckValidation(
        this.password,
        this.passwordCheck
      );
      if (!this.validateCheck.passwordCheck.state) {
        this.errorMessage = this.validateCheck.passwordCheck.message;
        return false;
      }

      this.validateCheck.nickname = utils.nicknameValidation(this.nickname);
      if (!this.validateCheck.nickname.state) {
        this.errorMessage = this.validateCheck.nickname.message;
        return false;
      }

      this.validateCheck.quiz = utils.quizValidation(this.quiz, "케비");
      if (!this.validateCheck.quiz.state) {
        this.errorMessage = this.validateCheck.quiz.message;
        return false;
      }

      return true;
    },
    register() {
      const check = this.formValidatedCheck();
      if (!check) return;

      user.register(this.email, this.password, this.nickname);
    },
  },
};
</script>
<style lang="scss" scoped>
.register-view-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.2rem;

  .register-form {
    position: absolute;
    top: 33.24%;
    left: 50%;
    transform: translate(-50%, -33.24%);
  }
}
</style>
