<template>
  <div class="post-detail-view-wrapper">
    <template-post
      v-if="dataLoading"
      mode="read"
      :data="postData"
      @modify="modifyPost"
      @delete="deletePost"
      @add-comment="addComment"
      @delete-comment="deleteComment"
    />
    <beat-loader
      class="loader"
      :loading="loader.loading"
      :color="loader.color"
    ></beat-loader>
    <b-modal v-model="modalShow">{{ message }}</b-modal>
  </div>
</template>
<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import board from "@/assets/firebase/board";
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost, BeatLoader },
  name: "view-post-detail",
  props: {
    pid: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  created() {
    this.getPostDetail();
  },
  data() {
    return {
      modalShow: false,
      message: "",
      postData: {},
      loader: {
        loading: false,
        color: "#0000fd",
      },
      dataLoading: false,
    };
  },
  methods: {
    async getPostDetail() {
      this.loader.loading = true;
      await board.getPostDetail(this.type, this.pid).then((snapshot) => {
        console.log(snapshot.val());
        this.postData = snapshot.val();
        this.loader.loading = false;
        this.dataLoading = true;
      });
    },
    modifyPost(postInfo) {
      // todo : implemnt modify post func
      // 이 함수에다가 작성한 게시글 업데이트 코드 작성해주세요.
      // 전달받은 값
      //  {
      //   pid: 0,
      //   title: "",
      //   writer: "",
      //   write_date: "",
      //   content: "",
      //   likes: 0,
      //   comments: [],
      // },
      // ex) post.modify(postInfo);
      console.log(postInfo);
      this.modalShow = true;
      this.message = "게시글이 수정되었습니다.";
    },
    deletePost(pid) {
      // todo : implemnt delete post func
      // 이 함수에다가 게시글 삭제 코드 작성해주세요.
      // 전달받은 값
      // pid
      // ex) post.delete(pid);
      console.log(pid);
      this.modalShow = true;
      this.message = "게시글이 삭제되었습니다.";
    },
    addComment(comment) {
      // todo : implemnt add comment func
      // 이 함수에다가 댓글 추가 코드 작성해주세요.
      // 전달받은 값
      // {
      //   pid: 0,
      //   nickname: "기요미",
      //   content: "와,, 저도 요즘 이런 고민을 하고 있었어요~",
      //   write_date: "2022.10.16 20:10:12",
      // },
      // ex) post.addComment(comment);
      console.log(comment);
    },
    deleteComment(cid) {
      // todo : implemnt delete comment func
      // 이 함수에다가 댓글 삭제 코드 작성해주세요.
      // 전달받은 값
      // cid
      // ex) post.deleteComment(cid);
      console.log(cid);
      this.modalShow = true;
      this.message = "댓글이F 삭제되었습니다.";
    },
  },
};
</script>
<style lang="scss" scoped>
.post-detail-view-wrapper {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
