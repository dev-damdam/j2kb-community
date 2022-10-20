import user from "@/assets/firebase/user";
import router from "@/router";

const actions = {
  signInAction({ commit }, payload) {
    user
      .signIn(payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user);
      })
      .catch((error) => {
        console.log(error);
        commit("setError", error.code);
      });
  },
  getUserInfoAction({ commit }, payload) {
    user.getUserInfo(payload).then((response) => {
      commit("setUserInfo", response);
      router.push("/home");
    });
  },
};

export default actions;
