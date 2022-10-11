<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/home">Home</router-link> |
    </nav>
    <router-view />
  </div>
</template>
<script>
import config from "@/assets/firebase/config";
export default {
  name: "app",
  created() {
    config.initFirebase();
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
