<template>
  <div class="my-menu-side-wrapper">
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
    };
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

  .none-border-radius {
    border-radius: 0;
  }
}
</style>
