<template>
  <div>
    <template-post mode="write" @write="writePost" />
    <b-modal v-model="modalShow">
      {{ message }}
      <template #modal-footer>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="success" @click="modalOk()"> OK </b-button>
      </template>
    </b-modal>
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
      isWrite: false,
    };
  },
  methods: {
    writePost(post) {
      board
        .writePost(post.writer, post.title, post.content, post.write_date)
        .then(() => {
          this.modalShow = true;
          this.message = "게시글이 작성되었습니다.";
        })
        .catch((error) => {
          console.log(error);
          this.modalShow = true;
          this.message = "게시글 작성이 실패되었습니다.";
        });
    },
    modalOk() {
      console.log("ok");
      this.modalShow = false;

      if (this.isWrite) {
        // TODO : move to post detail view
        this.isWrite = false;
      }
    },
  },
};
</script>
