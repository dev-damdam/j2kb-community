<template>
  <div>
    <template-post
      mode="read"
      @modify="modifyPost"
      @delete="deletePost"
      @add-comment="addComment"
    />
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost },
  name: "view-my-post-view",
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
    },
    deletePost(pid) {
      // todo : implemnt delete post func
      // 이 함수에다가 게시글 삭제 코드 작성해주세요.
      // 전달받은 값
      // pid
      // ex) post.delete(pid);
      console.log(pid);
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
  },
};
</script>
