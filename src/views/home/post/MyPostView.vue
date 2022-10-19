<template v-slot:pid="{ item }">
    <div class="general-board-view-wrapper">
      <module-table
            :items="items"
            :fields="fields"
            :totalRows="items.length"
            :perPage="perPage"/>
        <button class="edit" v-on:click="edit_post(item)">수정하기</button>
        <button class="delete" v-on:click="delete_post(item)">삭제하기</button>
    </div>
  </template>
  <script>
  import ModuleTable from "@/components/modules/ModuleTable.vue";
  import db from "@/assets/firebase/init";
  
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
    created(){
        this.read()
    },
    methods: {
      edit_post: function(item) {
        this.selectedItem = item
        this.$router.push("@/views/home/post/WritePostView.vue")
      },
      delete_post: function(item) {
        if (window.confirm("Do you really want to delete?")) {
            db.collection("users").doc(item).delete().then(()=> {
                console.log("Document deleted!");
            })
            .catch((error) => {
                console.error(error);
            })
        }
      },
      async read() {
        const sn = await this.$firebase.getAnalytics().collection('module-board').get()
        if(!sn.empty){
            this.items=sn.docs.map(v=> {
                const item = v.data()
                return{
                    pid : v.id,
                    title: item.title,
                    content: item.content
                }
            })
        }
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  .general-board-view-wrapper {
    width: 100%;
    height: 100%;
  }
  </style>
  