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
      isBack: false,
    };
  },
  methods: {
    async getPostDetail() {
      this.loader.loading = true;
      await board.getPostDetail(this.type, this.pid).then((snapshot) => {
        console.log(snapshot.val());
        this.postData = {
          type: this.type,
          pid: this.pid,
          title: snapshot.val().title,
          writer: snapshot.val().writer,
          write_date: snapshot.val().write_date,
          content: snapshot.val().content,
          likes: snapshot.val().likes,
          //comments: snapshot.val().comments
        };
        this.loader.loading = false;
        this.dataLoading = true;
      });
    },
    async modifyPost(postInfo) {
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
      await board
        .updatePost(
          postInfo.type,
          postInfo.pid,
          postInfo.title,
          postInfo.content
        )
        .then(() => {
          this.modalShow = true;
          this.message = "게시글이 수정되었습니다.";
        })
        .catch((error) => {
          console.log(error);
          this.modalShow = true;
          this.message = "게시글 수정 실패하였습니다.";
        });
    },
    deletePost(type, pid) {
      // todo : implemnt delete post func
      // 이 함수에다가 게시글 삭제 코드 작성해주세요.
      // 전달받은 값
      // pid
      // ex) post.delete(pid);
      board
        .deletePost(type, pid)
        .then(() => {
          this.isBack = true;
          this.modalShow = true;
          this.message = "게시글이 삭제되었습니다.";
        })
        .catch((error) => {
          console.log(error);
          this.modalShow = true;
          this.message = "게시글 삭제 실패하였습니다.";
        });
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
      this.message = "댓글이 삭제되었습니다.";
    },
    // modal event
    modalOk() {
      console.log("ok");
      this.modalShow = false;

      if (this.isBack) {
        this.$router.back();
        this.isBack = false;
      }
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
