<template>
  <div class="general-board-view-wrapper">
    <module-table
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
    />
  </div>
</template>
<script>
import ModuleTable from "@/components/modules/ModuleTable.vue";
export default {
  components: { ModuleTable },
  name: "general-board-view",
  data() {
    return {
      items: [],
      perPage: 10,
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
  mounted() {
    this.setSampleData();
  },
  methods: {
    setSampleData() {
      for (let i = 0; i < 30; i++) {
        this.items.push({
          id: i,
          title: "이것은 테스트입니다.",
          writer: "홍길동",
          write_date: "2022.10.06",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.general-board-view-wrapper {
  width: 100%;
  height: 100%;
}
</style>
