<template>
  <div>
    <a-dropdown style="float: left">
      <a class="ant-dropdown-link" href="#">
        <span style="margin-right: 10px">{{name}}</span>
         <a-avatar size="min" icon="user" />
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="1">退出</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
  data() {
    return {
      name: 'zc'
    }
  },
  methods: {
    onClick({ key }) {
      window.console.log(`Click on item ${key}`);
    }
  }
};
</script>