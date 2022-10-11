<template>
  <div class="login-view-wrapper">
    <main class="main">
      <div class="j2kb-notion-wrapper">
        <b-button
          class="j2kb-button"
          variant="outline-secondary"
          target="_black"
          href="https://j2kb.notion.site/J2KB-df15ecc314b34f9299dfd1740b244da5"
        >
          J2KB Notion 바로가기
        </b-button>
      </div>
      <b-form class="login-form d-flex flex-column align-items-center">
        <span class="title">J2KB OPEN BOARD</span>

        <b-form-input
          v-model="email"
          :state="loginState"
          aria-describedby="input-live-help input-live-feedback"
          class="w-75 mt-5 mb-3 shadow-sm"
          placeholder="EMAIL"
        ></b-form-input>
        <b-form-input
          v-model="password"
          :state="loginState"
          aria-describedby="input-live-feedback"
          class="w-75 mb-3 shadow-sm"
          type="password"
          placeholder="PASSWORD"
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
    </main>
    <footer class="footer">
      <img src="@/assets/imgs/login/login-footer.png" />
    </footer>
  </div>
</template>
<script>
import user from "@/assets/firebase/user";
import utils from "@/assets/common/utils";
import validateMessage from "@/assets/common/validateMessage";
import authErrorMessages from "@/assets/firebase/authErrorMessage";

export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      validateCheck: {
        email: {
          state: false,
          message: "",
        },
      },
      //modal
      loginState: null,
      errorMessage: "",
    };
  },
  methods: {
    moveRegisterView() {
      this.$router.push("/register");
    },

    signIn() {
      this.validateCheck.email = utils.emailValidation(this.email);
      if (!this.validateCheck.email.state) {
        this.loginState = false;
        this.errorMessage = this.validateCheck.email.message;
        return;
      }
      if (this.password == "") {
        this.validateCheck.password.state = false;
        this.loginState = false;
        this.errorMessage = validateMessage.NOT_INPUT_PASSWORD;
        return;
      }

      user
        .signIn(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            this.loginState = true;
            this.$router.push("/home");
          } else {
            this.$router.push("/not-email-verified");
          }
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          this.loginState = false;
          this.errorMessage = authErrorMessages.getErrorMessage(error.code);
        });
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

  .j2kb-notion-wrapper {
    position: absolute;
    right: -4.583%;
    width: 46.666%;
    height: 58.518%;
    background-image: url("@/assets/imgs/login/computer.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .j2kb-button {
      margin-top: 11.3841%;
      margin-left: 47.943%;
      border-color: #6c757d;
      background-color: white;

      &:hover {
        background-color: #6c757d;
      }
    }
  }

  .main {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

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
  .footer {
    position: absolute;
    bottom: 0;
    z-index: 1;
    img {
      width: 100%;
    }
  }
}
</style>
