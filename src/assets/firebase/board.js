import { ref, update, push, child, get } from "firebase/database";

let board = {
  db: null,
  setDB(db) {
    this.db = db;
  },
  writePost(nickname, title, content, write_date) {
    const postData = {
      writer: nickname,
      title: title,
      content: content,
      likes: 0,
      write_date: write_date,
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(this.db), "posts/general")).key;
    const updates = {};
    updates["/posts/general/" + newPostKey] = postData;

    return update(ref(this.db), updates);
  },

  async getGeneralPostList() {
    const postRef = ref(this.db, "posts/");
    return get(child(postRef, "general/"));
  },

  async getPostDetail(type, pid) {
    const postRef = ref(this.db, "posts/");
    return get(child(postRef, `${type}/${pid}/`));
  },
};

export default board;
