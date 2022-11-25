<template>
  <div class="template-post-wrapper">
    <form class="post-form">
      <section class="title-wrapper" :class="modeClass">
        <b-input
          class="title-input"
          v-model="post.title"
          placeholder="제목을 입력해주세요."
          :disabled="!checkPostWriter"
        />
        <div
          v-if="mode == 'read' && checkPostWriter"
          class="ml-3 button-wrapper"
        >
          <b-button @click="modifyPost">수정하기</b-button>
          <b-button @click="deletePost">삭제하기</b-button>
        </div>
      </section>
      <section v-if="mode == 'read'" class="post-info-wrapper">
        <span class="writer">{{ post.writer }}</span>
        <span class="write_date">{{ post.write_date }} 작성</span>
      </section>

      <section class="content-wrapper">
        <b-form-textarea
          class="content-textarea"
          v-model="post.content"
          placeholder="내용을 입력해주세요."
          :rows="mode == 'read' ? 15 : 20"
          no-resize
          :disabled="!checkPostWriter"
        >
        </b-form-textarea>
      </section>
      <section v-if="mode == 'read'" class="likes-wrapper">
        <b-button
          pill
          variant="outline-primary"
          :disabled="checkLikeState"
          @click="addLike"
        >
          추천<b-icon class="ml-1" icon="hand-thumbs-up" />
        </b-button>
        <span class="ml-3">{{ Object.keys(post.likes).length }}</span>
      </section>

      <section v-if="mode == 'read'" class="comments-wrapper">
        <div
          v-for="(comment, index) in post.comments"
          :key="index"
          class="comment"
        >
          <span class="nickname">{{ comment.nickname }}</span>
          <span class="content">{{ comment.content }}</span>
          <span class="write_date"> {{ dateFormat(comment.write_date) }} </span>
          <b-button
            v-if="checkCommentWriter(comment.nickname)"
            @click.prevent="deleteComment(comment)"
          >
            <b-icon icon="trash" />
          </b-button>
        </div>

        <div class="comment-input-wrapper">
          <b-input
            v-model="comment.content"
            placeholder="댓글을 작성해주세요."
            class="mr-3 comment-input"
          />
          <b-button class="add-comment-btn" @click="addComment">
            작성하기
          </b-button>
        </div>
      </section>
    </form>
    <section v-if="mode == 'write'" class="mt-5 post-btn-wrapper">
      <b-button @click="writePost" variant="outline-primary">
        게시글 작성하기
      </b-button>
    </section>
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "template-post",
  props: {
    mode: {
      type: String,
      require: true,
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      post: {},
      comment: {},
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
    modeClass: {
      get() {
        return this.mode == "write" ? "write-mode-title" : "read-mode-title";
      },
    },
    checkPostWriter() {
      if (this.mode == "write") {
        return true;
      } else {
        return this.post.writer == this.getUserInfo.nickname;
      }
    },
    checkLikeState() {
      if (Object.keys(this.post.likes).length > 0) {
        return Object.keys(this.post.likes).includes(this.getUserInfo.uid);
      } else {
        return false;
      }
    },
  },
  created() {
    moment.locale("ko");
    //set sample data
    this.setPostData();
  },
  watch: {
    data: {
      // This will let Vue know to look inside the array
      deep: true,
      handler() {
        //set sample data
        this.setPostData();
      },
    },
  },
  methods: {
    dateFormat(date) {
      return moment(date).format("lll");
    },
    checkCommentWriter(writer) {
      return this.getUserInfo.nickname == writer;
    },
    setPostData() {
      if (this.mode == "write") {
        this.post = {
          type: "general",
          pid: "",
          title: "",
          writer: "",
          write_date: "",
          content: "",
        };
      } else {
        this.post = {
          type: this.data.type,
          pid: this.data.pid,
          title: this.data.title,
          writer: this.data.writer,
          write_date: this.data.write_date,
          content: this.data.content,
          likes: this.data.likes,
          comments: this.data.comments,
        };
      }
    },
    modifyPost() {
      console.log("modify");
      this.$emit("modify", this.post);
    },
    deletePost() {
      console.log("delete");
      this.$emit("delete", this.post.type, this.post.pid);
    },
    addComment() {
      console.log("add comment");
      this.comment.writer = this.getUserInfo.nickname;
      this.comment.write_date = new Date().toUTCString();
      this.$emit("add-comment", this.post.type, this.post.pid, this.comment);

      this.comment.content = "";
    },
    writePost() {
      console.log("write post");
      // test
      this.post.writer = this.getUserInfo.nickname;
      this.post.write_date = new Date().toUTCString();
      this.$emit("write", this.post);
    },
    deleteComment(comment) {
      console.log(comment);
      console.log("delete comment");
      this.$emit("delete-comment", this.post.type, this.post.pid, comment);
    },
    addLike() {
      console.log("add like");
      this.$emit("add-like", this.post.type, this.post.pid);
    },
  },
};
</script>
<style lang="scss" scoped>
.template-post-wrapper {
  width: 100%;

  .post-form {
    background-color: white;
    border: 1px solid #dbdbdb;

    .title-wrapper {
      width: 100%;
      border-bottom: 1px solid #dbdbdb;
      padding-top: 1%;
      padding-right: 1%;
      padding-bottom: 1%;
      .title-input {
        border: none;
      }
    }

    .write-mode-title {
      display: flex;
      justify-content: space-between;
      .title-input {
        width: 100%;
      }
    }

    .read-mode-title {
      display: flex;
      .title-input {
        width: 80%;
      }

      .button-wrapper {
        width: 20%;
        display: flex;
        gap: 3%;
        justify-content: flex-end;
      }
    }

    .post-info-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: black;
      padding: 1%;
      border-bottom: 1px solid #dbdbdb;

      .write_date {
        color: #494444;
      }
    }

    .content-wrapper {
      .content-textarea {
        border: none;
      }
    }

    .likes-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 2%;

      align-items: center;

      border-bottom: 1px solid #dbdbdb;
    }

    .comments-wrapper {
      width: 100%;
      .comment {
        padding: 2%;

        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dbdbdb;

        span {
          text-align: left;
          display: inline-block;
        }
        .nickname {
          width: 20%;
          color: #0000fd;
        }
        .content {
          width: 60%;
        }

        .write_date {
          width: 20%;
          color: #494444;
          text-align: center;
        }
      }

      .comment-input-wrapper {
        display: flex;
        padding: 1%;
        .comment-input {
          width: 90%;
          border: none;
        }
        .add-comment-btn {
          width: 10%;
        }
      }
    }
  }

  .post-btn-wrapper {
    text-align: center;
  }
}

::v-deep .form-control:disabled {
  background-color: white;
}

::v-deep .btn.disabled,
.btn:disabled {
  opacity: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
