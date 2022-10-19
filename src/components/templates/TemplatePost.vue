<template>
  <div class="template-post-wrapper">
    <form class="post-form">
      <section class="title-wrapper" :class="modeClass">
        <form v-on:submit.prevent="addPost">
          <b-input
            class="title-input"
            v-model="post.title"
            placeholder="제목을 입력해주세요."
          />
        </form>
        <div v-if="mode == 'read'" class="ml-3 button-wrapper">
          <b-button @click="modifyPost">수정하기</b-button>
          <b-button @click="deletePost">삭제하기</b-button>
        </div>
      </section>
      <section v-if="mode == 'read'" class="post-info-wrapper">
        <span class="writer">{{ post.writer }}</span>
        <span class="write_date">{{ post.write_date }} 작성</span>
      </section>

      <section class="content-wrapper">
        <form v-on:submit.prevent="addPost">
          <b-form-textarea
            class="content-textarea"
            v-model="post.content"
            placeholder="내용을 입력해주세요."
            :rows="mode == 'read' ? 15 : 20"
            no-resize
          >
          </b-form-textarea>
        </form>
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
        </div>

        <div class="comment-input-wrapper">
          <b-input
            v-model="comment"
            placeholder="댓글을 작성해주세요."
            class="mr-3 comment-input"
          />
          <b-button class="add-comment-btn" @click="addComment">
            작성하기
          </b-button>
        </div>
      </section>
      <section v-if="mode == 'write'" class="mt-5 post-btn-wrapper">
        <b-button @click="addPost" variant="outline-primary">
          게시글 작성하기
        </b-button>
      </section>
    </form>
  </div>
</template>
<script>
import db from "@/assets/firebase/init";

export default {
  name: "template-post",
  props: {
    mode: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      post: {
        title: "",
        writer: "",
        write_date: "",
        content: "",
        likes: 0,
        comments: [],
      },
      comment: "",
    };
  },
  computed: {
    modeClass: {
      get() {
        return this.mode == "write" ? "write-mode-title" : "read-mode-title";
      },
    },
  },
  mounted() {
    //set sample data
    this.setSampleData();
  },
  methods: {
    setSampleData() {
      if (this.mode == "write") {
        this.post = {
          title: "",
          writer: "",
          write_date: "",
          content: "",
          likes: 0,
          comments: [],
        };
      } else {
        this.post = {
          title: "이것은 테스트 입니다.",
          writer: "홍길동",
          write_date: "2022.10.16 10:32:12",
          content: "테스트용으로 글을 작성합니다.",
          likes: 2,
          comments: [
            {
              id: 0,
              nickname: "기요미",
              content: "와,, 저도 요즘 이런 고민을 하고 있었어요~",
              write_date: "2022.10.16 20:10:12",
            },
            {
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
    },
    deletePost() {
      console.log("delete");
    },
    addComment() {
      console.log(this.comment);
    },
    addPost(event) {
      event.preventDefault();
      db.collection("posts")
        .add(this.post)
        .then(() => {
          alert("Post successfully created!");
          this.post.title = "";
          this.post.writer = "";
          this.post.writing = "";
          this.post.date = "";
        })
        .catch((error) => {
          console.log(error);
        });
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
</style>
