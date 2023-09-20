<template>
  <div class="login">
    <top @setColor="setFn" title="用户登录" rightText="切换主题"></top>
    <div class="form">
      <div class="form-item">
        <span>手机号码</span>
        <input type="text" v-model="phone" />
        <i
          class="iconfont"
          :class="isPhone ? 'icon-zhengqu' : 'icon-cuowu'"
          v-if="phone.length"
        ></i>
      </div>
      <div class="form-item">
        <span>密码</span>
        <input type="text" v-model="pwd" />
        <i
          class="iconfont"
          :class="isPwd ? 'icon-zhengqu' : 'icon-cuowu'"
          v-if="pwd.length"
        ></i>
      </div>
      <button v-color :disabled="!isPhone || !isPwd" @click="go">登录</button>
    </div>
  </div>
</template>

<script>
import top from "@/components/top.vue";
export default {
  name: "",
  components: { top },
  data() {
    return {
      phone: "",
      pwd: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    setFn() {
      this.$store.commit("setColor");
    },
    go() {
      this.$router.push("/");
    },
  },
  computed: {
    isPhone() {
      let reg = /^1[857573]\d{9}$/;
      return reg.test(this.phone);
    },
    isPwd() {
      let reg = /^[a-zA-Z]\d{5}$/;
      return reg.test(this.pwd);
    },
  },
};
</script>
<style scoped lang='scss'>
.login {
  height: 100vh;
}
.form {
  width: 260px;
  margin: 200px auto;
  button {
    height: 30px;
    width: 100px;
    margin: 30px 80px;
  }
  .form-item {
    display: flex;
    margin-top: 20px;
    align-content: center;
    span {
      width: 80px;
    }
    input {
      border: 1px solid #ccc;
    }
  }
}
.icon-zhengqu {
  color: green;
}
.icon-cuowu {
  color: red;
}
</style>
