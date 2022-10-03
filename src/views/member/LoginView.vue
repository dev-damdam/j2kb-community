<template>
  <div class="login-view-wrapper">
    J2KB OPEN BOARD
    <b-button @click="openJ2KBNotion">J2KB Notion 바로가기</b-button>
    <b-input v-model="email" placeholder="ID"></b-input>
    <b-input
      type="password"
      v-model="password"
      placeholder="PASSWORD"
    ></b-input>
    <b-button @click="signIn">Sign In</b-button>
    회원이 아니신가요? <b-button @click="moveRegisterView">Sign Up</b-button>
  </div>
</template>
<script>
import user from "@/assets/firebase/user";
// import utils from "@/assets/common/utils";
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
    };
  },
  methods: {
    moveRegisterView() {
      this.$router.push("/register");
    },

    openJ2KBNotion() {
      // todo something
    },

    signIn() {
      // this.validateCheck.email = utils.emailValidation(this.email);
      // if (!this.validateCheck.email.state) {
      //   alert(this.validateCheck.email.message);
      //   return;
      // }
      // this.validateCheck.password = utils.passwordValidation(this.password);
      // if (!this.validateCheck.password.state) {
      //   alert(this.validateCheck.password.message);
      //   return;
      // }

      if (this.email == "") {
        alert("이메일을 입력해주세요.");
        return;
      }
      if (this.password == "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }

      user
        .signIn(this.email, this.password)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);

          alert(
            "일치하는 회원 정보가 없습니다.\n이메일 혹은 비밀번호를 다시 입력해주세요."
          );
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view-wrapper {
  width: 100%;
}
</style>
