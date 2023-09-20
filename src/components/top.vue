<template>
  <div class="top">
    <header v-color>
      <span @click="leftClick"> {{ leftText }}</span>
      <span>{{ title }}</span>
      <span @click="rightClick">{{ rightText }}</span>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "用户登录",
    },
    rightText: {
      type: String,
      default: "切换主题",
    },
    leftText: {
      type: String,
      default: "",
    },
  },
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    rightClick() {
      this.$emit("setColor");
      this.$emit("goBooK");
    },
    leftClick() {
      this.$emit('leftClick')
    },
  },
};
</script>
<style scoped lang='scss'>
.top {
  header {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    background-color: red;
    padding: 0 20px;
    color: #fff;
    box-sizing: border-box;
    > div {
      flex: 1;
      align-items: center;
    }
  }
}
</style>
