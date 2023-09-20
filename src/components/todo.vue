<template>
  <div class="todo">
    <div class="todo_list">
      <h5>{{ item.name }}</h5>
      <div>
        <span class="red" @click="changeStatus(item.id)">{{
          item.status ? "再看一遍" : "标记为已看完"
        }}</span>
        <span @click="del(item.id)">删除图书</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    changeStatus(id) {
      this.$store.commit("changeStatus", id);
    },
    del(id) {
      this.$store.commit("del", id);
    },
  },
};
</script>
<style scoped lang='scss'>
.todo_list {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .red{
    color: red;
  }
}
</style>
