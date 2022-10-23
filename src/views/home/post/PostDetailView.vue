<template>
  <div>
    <template-post
      mode="read"
      @modify="modifyPost"
      @delete="deletePost"
      @add-comment="addComment"
      @delete-comment="deleteComment"
    />
    <b-modal v-model="modalShow">{{ message }}</b-modal>
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost },
  name: "view-my-post-view",
  data() {
    return {
      modalShow: false,
      message: "",
    };
  },
  methods: {
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
