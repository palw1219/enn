<template>
  <div class="box">
    <div class="list">
      <img :src="item.img" alt="" referrerpolicy="no-referrer" />
      <p class="text">{{ item.desc }}</p>
      <div class="o">
        <h5>{{ item.name }}</h5>
        <button @click="addBook">+</button>
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
    addBook() {
      this.$emit("addBook");
    },
  },
};
</script>
<style scoped lang='scss'>
.text {
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.o {
  h5 {
    color: red;
    font-weight: 500;
  }
  button {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: red;
    color: #fff;
  }
  display: flex;
  justify-content: space-between;
}
.box {
  width: 50%;
  box-shadow: 0 0 1px 1px #ccc;
  padding: 10px;
  box-sizing: border-box;
}
.list {
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
