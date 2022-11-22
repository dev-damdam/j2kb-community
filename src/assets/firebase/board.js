import { ref, update, push, child, get, remove } from "firebase/database";

let board = {
  db: null,

  setDB(db) {
    this.db = db;
  },

  writePost(nickname, title, content, write_date) {
    // 게시글 작성 함수
    const postData = {
      writer: nickname,
      title: title,
      content: content,
      likes: [],
      write_date: write_date,
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(this.db), `posts/general`)).key;
    const updates = {};
    updates["/posts/general/" + newPostKey] = postData;

    return update(ref(this.db), updates);
  },

  updatePost(type, pid, title, content) {
    // 게시글 수정 함수
    return update(ref(this.db, `/posts/${type}/${pid}`), {
      title: title,
      content: content,
    });
  },

  deletePost(type, pid) {
    // 게시글 삭제 함수
    const postRef = ref(this.db, `/posts/${type}/${pid}`);
    return remove(postRef);
  },

  addPostLike(type, pid, uid) {
    return update(ref(this.db, `/posts/${type}/${pid}/likes`), {
      [uid]: true,
    });
  },

  getPostLike(type, pid) {
    const postRef = ref(this.db, `/posts/${type}/${pid}`);
    return get(child(postRef, `/likes`));
  },

  getGeneralPostList() {
    // 일반 게시판 게시글 목록 가져오는 함수
    const postRef = ref(this.db, `posts`);
    return get(child(postRef, `/general/`));
  },

  getPostDetail(type, pid) {
    // 게시글 상세 정보 가져오는 함수
    const postRef = ref(this.db, `posts`);
    return get(child(postRef, `/${type}/${pid}/`));
  },
};

export default board;
