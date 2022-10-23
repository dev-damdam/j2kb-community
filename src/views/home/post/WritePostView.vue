<template>
  <div>
    <template-post mode="write" @write="writePost" />
    <b-modal v-model="modalShow">{{ message }}</b-modal>
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost },
  name: "write-post-view",
  data() {
    return {
      modalShow: false,
      message: "",
    };
  },
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
      this.modalShow = true;
      this.message = "게시글이 작성되었습니다.";
    },
  },
};
</script>
