<template>
  <div class="login-view-wrapper">
    <template-sign-in-main>
      <b-form class="login-form d-flex flex-column align-items-center">
        <span class="title">J2KB OPEN BOARD</span>

        <b-form-input
          v-model="email"
          :state="validateCheck.email.state"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mt-5 mb-3 shadow-sm"
          placeholder="이메일"
        ></b-form-input>
        <b-form-input
          v-model="password"
          :state="validateCheck.password.state"
          aria-describedby="input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          type="password"
          placeholder="비밀번호"
        />
        <b-form-invalid-feedback id="input-live-feedback" class="w-75">
          {{ errorMessage }}
        </b-form-invalid-feedback>
        <b-button
          class="w-75 mt-5 mb-4"
          variant="outline-secondary"
          @click="signIn"
        >
          로그인
        </b-button>
        <div class="w-75 not-member">
          <span class="not-member-text">회원이 아니신가요?</span>
          <b-button
            class="ml-3 w-25"
            variant="outline-secondary"
            @click="moveRegisterView"
          >
            회원 가입
          </b-button>
        </div>
      </b-form>
    </template-sign-in-main>
    <template-sign-in-footer />
  </div>
</template>
<script>
// import user from "@/assets/firebase/user";
import utils from "@/assets/common/utils";
import { mapActions } from "vuex";
// import authErrorMessages from "@/assets/firebase/authErrorMessage";
import { mapGetters } from "vuex";
import TemplateSignInMain from "@/components/templates/TemplateSignInMain.vue";
import TemplateSignInFooter from "@/components/templates/TemplateSignInFooter.vue";

export default {
  components: { TemplateSignInMain, TemplateSignInFooter },
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      validateCheck: {
        email: {
          state: null,
          message: "",
        },
        password: {
          state: null,
          message: "",
        },
      },
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["signInAction", "getUserInfoAction"]),
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
      };
    },
    moveRegisterView() {
      this.$router.push("/register");
    },
    formValidatedCheck() {
      // init validated state
      this.initValidatedState();

      this.validateCheck.email = utils.emailValidation(this.email);
      if (!this.validateCheck.email.state) {
        this.errorMessage = this.validateCheck.email.message;
        return false;
      }

      this.validateCheck.password = utils.passwordInputCheck(this.password);
      if (!this.validateCheck.password.state) {
        this.errorMessage = this.validateCheck.password.message;
        return false;
      }

      return true;
    },
    signIn() {
      const check = this.formValidatedCheck();

      if (!check) return;

      this.signInAction({ email: this.email, password: this.password });
      this.getUserInfoAction(this.getUser.uid);

      //   .catch((error) => {
      //     console.log(error.code);
      //     console.log(error.message);
      //     this.validateCheck.email.state = false;
      //     this.validateCheck.password.state = false;
      //     this.errorMessage = authErrorMessages.getErrorMessage(error.code);
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.2rem;

  .login-form {
    position: absolute;
    top: 33.24%;
    left: 50%;
    transform: translate(-50%, -33.24%);
    .title {
      font-weight: 400;
      font-size: 4rem;
      color: #000000;
    }

    .not-member {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
