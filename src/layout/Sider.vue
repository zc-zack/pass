<template>
   <a-layout-sider v-model="collapsed">
     <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon />
    </a-button>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <router-link tar="span" to="/home/application">应用</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><span>系统设置</span></span>
          <a-menu-item key="2">
            <router-link to="/home/business">业务管理</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
     methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  };
</script>

