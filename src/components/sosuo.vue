<template>
  <div>
    <input
      type="text"
      placeholder="请输入搜索的内容"
      :value="value"
      @input="changeValue"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    changeValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style scoped lang='scss'>
input {
  width: 100%;
  height: 40px;
  background-color: #ccc;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
