<template>
  <div>
    <my-Heade></my-Heade>
    <!-- <HomeView></HomeView> -->
    <test :title="tit"></test>
    <test :title="tit1"></test>
    <Table></Table>
  </div>
</template>
<script>
import myHeade from "./components/myheade.vue";
import HomeView from "./views/HomeView.vue";
import test from "./components/test.vue";
import Table from "./components/table.vue";

export default {
  components: { myHeade, HomeView, test, Table },
  data() {
    return {
      tit: "标题",
      tit1: "标题二",
    };
  },
};
</script>

<style>
</style>
