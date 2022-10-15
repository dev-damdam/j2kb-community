<template>
  <div class="post-board-view-wrapper">
    <b-tabs no-fade>
      <b-tab title-link-class="title-link-class" title="일반 게시판" active>
        <general-board-view />
      </b-tab>
      <b-tab title-link-class="title-link-class" title="HOT 게시판">
        <hot-board-view />
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import GeneralBoardView from "./board/GeneralBoardView.vue";
import HotBoardView from "./board/HotBoardView.vue";
export default {
  components: { GeneralBoardView, HotBoardView },
  name: "post-board-view",
};
</script>

<style lang="scss" scoped>
.post-board-view-wrapper {
  width: 100%;
  height: 100%;

  ::v-deep .title-link-class {
    background-color: white;
    border-color: #dee2e6;
  }
}
</style>
