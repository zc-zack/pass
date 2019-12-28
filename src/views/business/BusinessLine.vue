<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-button type="primary" style="float:right; margin-right: 30px" @click="showModal">添加业务线</a-button>
          <a-modal title="添加业务线" v-model="visible" @ok="handleOk">
            <div style="vertical-align:middle;text-align: center">
              <a-row :gutter="16">
                <a-col :span="8" style="text-align: left">业务线名字</a-col>
                <a-col :span="8"><a-input placeholder="请输入" type="text" /></a-col>
              </a-row>
            </div>
          </a-modal>
        </a-row>
      </a-form>
    </div>
    <div style="margin-top: 20px">
      <a-table :columns="columns" :dataSource="data">
        <a slot="action" href="javascript:;">编辑</a>
      </a-table>
    </div>
  </a-card>
</template>

<script>
const columns = [
  {
    title: "序号",
    dataIndex: "id"
  },
  {
    title: "业务线",
    dataIndex: "businessLine"
  },
  {
    title: "管理员",
    dataIndex: "creator"
  },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 100,
    scopedSlots: { customRender: "action" }
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    id: i,
    businessLine: "运维系统",
    creator: "zc"
  });
}

export default {
  name: "Application",
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      window.console.log(e);
      this.visible = false;
    }
  }
};
</script>