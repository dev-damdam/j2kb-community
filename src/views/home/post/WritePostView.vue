<template>
  <div>
    <template-post mode="write" :reset="isReset" @write="writePost" />
    <b-modal v-model="modalShow">{{ message }}</b-modal>
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
import board from "@/assets/firebase/board";
export default {
  components: { TemplatePost },
  name: "write-post-view",
  data() {
    return {
      modalShow: false,
      message: "",
      isReset: false,
    };
  },
  methods: {
    writePost(post) {
      board
        .writePost(post.writer, post.title, post.content, post.write_date)
        .then(() => {
          this.modalShow = true;
          this.message = "게시글이 작성되었습니다.";
          this.isReset = true;
        })
        .catch((error) => {
          console.log(error);
          this.modalShow = true;
          this.message = "게시글 작성이 실패되었습니다.";
          this.isReset = false;
        });
    },
  },
};
</script>
