import user from "@/assets/firebase/user";
import router from "@/router";

const actions = {
  signInAction({ commit }, payload) {
    user
      .signIn(payload.email, payload.password)
      .then((response) => {
        console.log(response.user);
        commit("setUser", response.user);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
        commit("setError", error.code);
      });
  },
  getUserInfoAction({ commit }, payload) {
    user.getUserInfo(payload).then((response) => {
      console.log(response);
      commit("setUserInfo", response);
    });
  },
};

export default actions;
