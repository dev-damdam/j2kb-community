<template>
  <div>
    <template-post mode="write" />
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
//import {doc, collection, getDocs, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/getAnalytics";

export default {
  components: { TemplatePost },
  name: "write-post-view",
};
</script>
