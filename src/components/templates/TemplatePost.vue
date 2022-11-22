<template>
  <div class="template-post-wrapper">
    <form class="post-form">
      <section class="title-wrapper" :class="modeClass">
        <b-input
          class="title-input"
          v-model="post.title"
          placeholder="제목을 입력해주세요."
          :disabled="!checkWriter"
        />
        <div v-if="mode == 'read' && checkWriter" class="ml-3 button-wrapper">
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
          :disabled="!checkWriter"
        >
        </b-form-textarea>
      </section>
      <section v-if="mode == 'read'" class="likes-wrapper">
        <b-button pill variant="outline-primary">
          추천<b-icon class="ml-1" icon="hand-thumbs-up" />
        </b-button>
        <span class="ml-3">{{ post.likes }}</span>
      </section>

      <section v-if="mode == 'read'" class="comments-wrapper">
        <div v-for="comment in post.comments" :key="comment.id" class="comment">
          <span class="nickname">{{ comment.nickname }}</span>
          <span class="content">{{ comment.content }}</span>
          <span class="write_date">{{ comment.write_date }}</span>
          <b-button v-if="checkWriter" @click.prevent="deleteComment(comment)">
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
import { mapGetters } from "vuex";

export default {
  name: "template-post",
  props: {
    mode: {
      type: String,
      require: true,
    },
    reset: {
      type: Boolean,
      default: false,
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
    checkWriter() {
      if (this.mode == "write") {
        return true;
      } else {
        return this.post.writer == this.getUserInfo.nickname;
      }
    },
  },
  created() {
    console.log(1);
    //set sample data
    this.setSampleData();
  },
  watch: {
    reset(value) {
      if (value) {
        this.post = {
          title: "",
          writer: "",
          write_date: "",
          content: "",
        };
      }
    },
  },
  methods: {
    setSampleData() {
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
        console.log(this.data);
        this.post = {
          type: this.data.type,
          pid: this.data.pid,
          title: this.data.title,
          writer: this.data.writer,
          write_date: this.data.write_date,
          content: this.data.content,
          likes: this.data.likes,
          comments: [
            {
              pid: 0,
              id: 0,
              nickname: "기요미",
              content: "와,, 저도 요즘 이런 고민을 하고 있었어요~",
              write_date: "2022.10.16 20:10:12",
            },
            {
              pid: 0,
              id: 1,
              nickname: "Lucy",
              content: "댓글 감사합니다!",
              write_date: "2022.10.16 20:29:12",
            },
          ],
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

      // test
      this.comment.pid = this.post.pid;
      this.comment.writer = this.getUserInfo.nickname;
      this.comment.write_date = new Date().toUTCString();
      this.$emit("add-comment", this.comment);
    },
    writePost() {
      console.log("write post");
      // test
      this.post.writer = this.getUserInfo.nickname;
      this.post.write_date = new Date().toUTCString();
      this.$emit("write", this.post);
    },
    deleteComment(comment) {
      console.log("delete comment");
      this.$emit("delete-comment", comment.id);
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
</style>
