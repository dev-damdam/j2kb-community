<template>
  <div>
    <b-table
      class="module-board"
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
      :current-page="currentPage"
      thead-tr-class="thead-tr-class"
      @row-clicked="rowClicked"
    />
    <b-pagination
      class="pb-5"
      v-model="currentPage"
      :per-page="perPage"
      :total-rows="items.length"
      align="center"
      limit="10"
      hide-ellipsis
    />
  </div>
</template>
<script>
export default {
  name: "module-table",
  props: {
    items: {
      type: Array,
      require: true,
    },
    fields: {
      type: Array,
      require: true,
    },
    perPage: {
      type: Number,
      require: true,
    },
    totalRows: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      page: 0,
    };
  },
  created() {
    this.currentPage = 1;
  },
  computed: {
    currentPage: {
      set(value) {
        this.page = value;
        this.$emit("current-page", value);
      },
      get() {
        return this.page;
      },
    },
  },
  methods: {
    rowClicked(item, index, event) {
      this.$emit("row-clicked", item, index, event);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .thead-tr-class {
  text-align: center;
  background-color: white;
}

.module-board {
  background-color: white;
  border: 1px solid #dee2e6;
}

::v-deep table.b-table thead th.w15 {
  width: 15%;
}

::v-deep table.b-table thead th.w25 {
  width: 25%;
}

::v-deep table.b-table thead th.w45 {
  width: 45%;
}

::v-deep table.b-table thead th.w60 {
  width: 60%;
}

::v-deep table tbody tr td {
  text-align: center;

  &:nth-child(2) {
    // only title col text-align left
    text-align: left;
  }
}
</style>
