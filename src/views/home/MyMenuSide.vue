<template>
  <div class="my-menu-side-wrapper">
    <div class="profile-wrapper">
      <span class="nickname">{{ nickname }} 님</span>
      <span>환영합니다!</span>
    </div>
    <b-list-group class="none-border-radius">
      <b-list-group-item
        v-for="menu in menuList"
        :key="menu.link"
        :active="menu.name == currentMenu.name"
        @click="selectMenu(menu)"
      >
        {{ menu.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  name: "my-menu-side",
  props: {
    menuList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      currentMenu: {},
      nickname: "",
    };
  },
  created() {
    this.nickname = "홍길순";
  },
  methods: {
    selectMenu(menu) {
      this.currentMenu = menu;
      this.$emit("menu", menu);
    },
  },
};
</script>
<style lang="scss" scoped>
.my-menu-side-wrapper {
  width: 100%;

  .profile-wrapper {
    width: 100%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    color: #0000fd;
    font-size: 1.2rem;

    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    .nickname {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .none-border-radius {
    border-radius: 0;
  }
}
</style>
