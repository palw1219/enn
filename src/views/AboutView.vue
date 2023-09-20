<template>
  <div class="book">
    <top
      @leftClick="$router.back()"
      leftText="返回"
      title="我的书架"
      rightText=""
      style="margin-bottom: 10px"
    ></top>
    <div
      v-color
      class="color"
      style="display: flex; justify-content: space-between"
    >
      <h1 v-color class="color">正在看</h1>
      <img
        src="../assets/logo.png"
        alt=""
        style="width: 20px; height: 20px; margin-top: 20px"
        @click="adad"
      />
    </div>
    <todo
      v-for="item in $store.getters.doing"
      :key="item.id"
      :item="item"
      v-if="aa == true"
    ></todo>
    <div
      v-color
      class="color"
      style="display: flex; justify-content: space-between"
    >
      <h1 v-color class="color">已完结</h1>
      <img
        src="../assets/logo.png"
        alt=""
        style="width: 20px; height: 20px; margin-top: 20px"
        @click="ada"
      />
    </div>
    <todo
      v-for="item in $store.getters.done"
      :key="item.id"
      :item="item"
      v-if="a == true"
    ></todo>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import todo from "@/components/todo.vue";
export default {
  name: "",
  components: { top, todo },
  data() {
    return {
      aa: true,
      a: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    adad() {
      this.aa = !this.aa;
    },
    ada() {
      this.a = !this.a;
    },
  },
};
</script>
<style scoped lang='scss'>
.color {
  color: #fff;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
