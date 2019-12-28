<template>
  <div style="height: 100%">
    <a-layout style="height: 100%">
      <Header></Header>
      <a-layout>
        <Sider></Sider>
        <a-layout-content>
          <router-view></router-view>
    
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Header from "../layout/Header.vue";
import Sider from "../layout/Sider.vue";
// import Content from './layout/Content.vue'

export default {
  name: "Home",
  components: {
    Header,
    Sider
  }
};
</script>
<style>
.ant-layout-has-sider {
  width: auto;
}
</style>