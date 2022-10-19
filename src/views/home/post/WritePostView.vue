<template>
  <div>
    <template-post mode="write" @write="writePost" />
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost },
  name: "write-post-view",
  methods: {
    writePost(postInfo) {
      // todo : implement write post func
      // 이 함수에다가 게시글 작성 코드 작성해주세요.
      // 전달받은 값
      // {
      //     title: "",
      //     writer: "",
      //     write_date: "",
      //     content: "",
      //     likes: 0,
      // }
      console.log(postInfo);
    },
  },
};
</script>
