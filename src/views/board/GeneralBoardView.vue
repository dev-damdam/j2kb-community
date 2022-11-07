<template>
  <div class="general-board-view-wrapper">
    <module-table
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
      @row-clicked="showDetailPost"
    />
    <beat-loader
      class="loader"
      :loading="loader.loading"
      :color="loader.color"
    ></beat-loader>
  </div>
</template>
<script>
import moment from "moment";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import ModuleTable from "@/components/modules/ModuleTable.vue";
import board from "@/assets/firebase/board";
export default {
  components: { ModuleTable, BeatLoader },
  name: "general-board-view",
  data() {
    return {
      items: [],
      perPage: 20,
      currentPage: 1,
      loader: {
        loading: false,
        color: "#0000fd",
      },
      fields: [
        {
          key: "id",
          label: "게시글 번호",
          sortable: true,
          thClass: "w15",
        },
        {
          key: "title",
          label: "제목",
          sortable: false,
          thClass: "w45",
        },
        {
          key: "writer",
          label: "작성자",
          sortable: false,
          thClass: "w15",
        },
        {
          key: "write_date",
          label: "작성 날짜",
          sortable: false,
          thClass: "w25",
        },
      ],
    };
  },
  created() {
    moment.locale("ko");
    this.loader.loading = true;
    board
      .getGeneralPostList()
      .then((snapshot) => {
        const posts = snapshot.val();
        const keys = Object.keys(posts);

        for (let i = 0; i < keys.length; i++) {
          this.items.push({
            pid: keys[i],
            id: i + 1,
            title: posts[keys[i]].title,
            writer: posts[keys[i]].writer,
            write_date: moment(posts[keys[i]].write_date).format("ll"),
          });
        }
        this.loader.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loader.loading = false;
      });
  },
  methods: {
    showDetailPost(item, index, event) {
      console.log(item, index, event);
      this.$router.push({
        name: "view-post-detail",
        params: { pid: item.pid },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.general-board-view-wrapper {
  width: 100%;
  height: 100%;

  position: relative;
  top: 0;
  left: 0;

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
