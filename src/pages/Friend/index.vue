<template>
  <div class="Friend-wrap w-def-container">
    <div class="login-tip">
      <div class="bg-pic">
        <a href="/" class="login-btn">立即登录</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Friend'
});
</script>

<style lang="scss" scoped>
.Friend-wrap {
  min-height: 700px;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .login-tip {
    .bg-pic {
      position: relative;
      margin: 0 auto;
      width: 807px;
      height: 484px;
      background: url('assets/images/login_friend.jpg') no-repeat 0 104px;
      .login-btn {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 368px;
        text-indent: -9999px;
      }
    }
  }
}
</style>
