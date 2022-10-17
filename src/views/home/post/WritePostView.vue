<template>
  <div>
    <template-post mode="write" />
  </div>
</template>
<script>
import TemplatePost from "@/components/templates/TemplatePost.vue";
export default {
  components: { TemplatePost },
  name: "write-post-view",
};
</script>
