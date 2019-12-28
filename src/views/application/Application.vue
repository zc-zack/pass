<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="3" :sm="24">
            <a-form-item>
              <a-select placeholder="我创建的" default-value="我创建的" style="width: 110px">
                <a-select-option value="全部">全部</a-select-option>
                <a-select-option value="my_create">我创建的</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="3" :sm="24">
            <a-form-item>
              <a-select placeholder="运营系统" default-value="运营系统" style="width: 110px">
                <a-select-option value="销售系统">销售系统</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="3" :sm="24">
            <a-form-item>
              <a-select placeholder="web应用" default-value="web应用" style="width: 110px">
                <a-select-option value="移动应用">移动应用</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="7" :sm="24">
            <a-input-search placeholder="请输入编号或名称" style="width:170px" />
          </a-col>
          <a-col :md="8" :sm="24">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item id="1">web应用</a-menu-item>
                <a-menu-item id="2">移动应用</a-menu-item>
              </a-menu>
              <a-button type="primary" style="float:right">创建应用</a-button>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div>
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys}"
        :columns="columns"
        :dataSource="data"
      >
        <a slot="action"  href="javascript:;">退出</a>
      </a-table>
    </div>
  </a-card>
</template>

<script>
const columns = [
  {
    title: "编号",
    dataIndex: "id"
  },
  {
    title: "应用名称",
    dataIndex: "name"
  },
  {
    title: "类型",
    dataIndex: "type"
  },
  {
    title: "业务线",
    dataIndex: "businessLine"
  },
  {
    title: "创建人",
    dataIndex: "creator"
  },
  {
    title: "创建时间",
    dataIndex: "create_time"
  },
  {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      scopedSlots: { customRender: 'action' },
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    id: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    type: "web应用",
    businessLine: "运维系统",
    creator: "zc",
    create_time: "2019-01-01"
  });
}

export default {
  name: "Application",
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {}
};
</script>>