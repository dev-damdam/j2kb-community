<template>
  <div class="view-my-post-view-wrapper">
    <module-table
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
      @row-clicked="showDetailPost"
    />
  </div>
</template>
<script>
import ModuleTable from "@/components/modules/ModuleTable.vue";

export default {
  components: { ModuleTable },
  name: "view-my-post-view",
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      items: [],
      perPage: 20,
      currentPage: 1,
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
          thClass: "w60",
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
  mounted() {
    this.setSampleData();
  },
  methods: {
    setSampleData() {
      for (let i = 0; i < 30; i++) {
        this.items.push({
          id: i,
          title: "이것은 테스트입니다.",
          write_date: "2022.10.06",
        });
      }
    },
    showDetailPost(item, index, event) {
      console.log(item, index, event);
      this.$router.push({
        name: "view-post-detail",
        params: { id: item.id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.view-my-post-view-wrapper {
  width: 100%;
}
</style>
