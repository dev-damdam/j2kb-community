<template>
  <div class="home-view-wrapper">
    <div class="background">
      <img class="bg-cherry" src="@/assets/imgs/home/cherry.png" />
      <img
        class="bg-balloon-puppy"
        src="@/assets/imgs/home/balloon-puppy.png"
      />
      <img class="bg-cloud" src="@/assets/imgs/home/cloud.png" />
      <img class="bg-flower" src="@/assets/imgs/home/flower.png" />
      <img class="bg-heart" src="@/assets/imgs/home/heart.png" />
    </div>
    <my-menu-side :menu-list="menuList" class="side" @menu="selectMenu" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import MyMenuSide from "./MyMenuSide.vue";
export default {
  name: "HomeView",
  components: { MyMenuSide },
  data() {
    return {
      menuList: [
        {
          name: "정보 수정",
          link: "update-profile",
        },
        {
          name: "글 작성하기",
          link: "my-post",
        },
        {
          name: "내가 쓴 글 보기",
          link: "view-my-post",
        },
        {
          name: "내가 쓴 댓글 보기",
          link: "view-my-comment",
        },
      ],
    };
  },
  methods: {
    selectMenu(menu) {
      console.log(menu);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-view-wrapper {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      position: absolute;
    }

    .bg-cherry {
      width: 16.25%;
      left: 0%;
      top: 41.388%;
    }
    .bg-balloon-puppy {
      width: 20.208%;
      right: 0%;
      top: 0.833%;
    }
    .bg-cloud {
      width: 18.385%;
      left: 10.885%;
      top: 0.37%;
    }
    .bg-heart {
      width: 12.708%;
      left: 50%;
      bottom: 0%;

      transform: translateX(-50%);
    }
    .bg-flower {
      width: 14.895%;
      right: 4.385%;
      bottom: 3.833%;
    }
  }
  .side {
    z-index: 1;
    width: 20%;
    height: 100%;
  }
  .main {
    z-index: 1;
    width: 80%;
    height: 100%;
  }
}
</style>
