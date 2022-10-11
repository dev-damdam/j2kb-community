<template>
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
    <slot />
  </main>
</template>
<script>
export default {
  name: "template-sign-in-main",
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
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
}
</style>
