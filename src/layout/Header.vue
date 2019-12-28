<template>
  <div id="components-layout-demo-top-side-2">
    <a-layout-header>
      <router-link tar="div" class="logo" to="/home"></router-link>
      <UserMenu style="float: right"></UserMenu>
    </a-layout-header>
  </div>
</template>
<script>
import UserMenu from "../components/avatar/UserMenu.vue";
export default {
  name: "Header",
  components: {
    UserMenu
  }
};
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  width: 150px;
  height: 31px;
  background: url("../assets/logo.png") no-repeat;
  margin: 16px 28px 16px 0;
  float: left;
}
</style>