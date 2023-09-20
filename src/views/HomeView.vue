<template>
  <div class="">
    <top title="图书商城" rightText="我的书架" @goBooK="goBooK"></top>
    <sosuo v-model="title"></sosuo>
    <div class="book">
      <list
        v-for="(item, index) in ll"
        :key="index"
        @addBook="addFn(item)"
        :item="item"
      ></list>
    </div>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import axios from "axios";
import list from "../components/list.vue";
import sosuo from "@/components/sosuo.vue";
export default {
  name: "",
  components: {
    top,
    list,
    sosuo,
  },
  data() {
    return {
      list: [],
      title: "",
    };
  },
  created() {
    axios.get("data.json").then((res) => {
      console.log(res);
      this.list = res.data;
    });
  },
  mounted() {},
  methods: {
    addFn(item) {
      let ad = this.$store.state.bookList.some((it) => it.id == item.id);
      if (ad) {
        alert("重复添加！");
        return;
      } else {
        alert("添加成功");
        this.$store.commit("addFn", item);
      }
    },
    goBooK() {
      this.$router.push("/about");
    },
  },
  computed: {
    ll() {
      return this.list.filter((item) => item.name.includes(this.title));
    },
  },
};
</script>
<style scoped lang='scss'>
.book {
  display: flex;
  flex-wrap: wrap;
}
</style>
