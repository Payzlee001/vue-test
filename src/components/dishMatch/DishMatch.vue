<template>
  <div class="dishMatch">
    <Row class="dishMatch_header">
          <i-Col span="18" push="11">
          <Button @click="mappingStart"> 
            开始匹配
          </Button>
          <Button to="/dishMatchHome"> 
            返回列表
          </Button>
        </i-Col>
        <i-Col span="6" pull="18">
          {{ type }}商品映射
        </i-Col>
    </Row>
    <Tabs size="small">
      <TabPane label="匹配信息">
        <div class="mappingText">
          <p>上次匹配时间：{{ lastTime }}</p>
          <P>
            当前匹配状态：
            <span v-if="successNo">
              匹配失败
              <span className="redColor">{{ failNo }}</span>
              笔数据, 匹配成功
              <span className="greenColor">{{ successNo }}</span>
              笔数据
            </span>
            <span v-else>
              未匹配
            </span>
          </P>
        </div>
        <div>
          <span class="mappingTitle">{{ type }}</span>
          <span class="mappingTitle">客如云</span>
        </div>
        <Table :columns="columns" :data="tableData"></Table>
        <div style="margin: 10px;overflow: hidden" v-if="successNo">
          <div style="float: right;">
              <Page :total="30" :current="1" @on-change="changePage"></Page>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import API from '../../api';

let source;
const name = {
  6: '饿了么星选',

  16: '美团外卖',
  10: '饿了么',
  21: '京东到家',
};
const column = [
  {
    title: '规格',
    key: 'dishProperty',
    render(text) {
      return !text ? '-' : text;
    },
  },
  {
    title: '名称',
    key: 'dishName',
    render(text) {
      return !text ? '-' : text;
    },
  },
  {
    title: '匹配状态',
    key: 'message',
    render(text) {
      return text === '成功' ? (
        <span className="greenColor">{text}</span>
      ) : (
        <span className="redColor">{text}</span>
      );
    },
  },
  {
    title: '名称',
    key: 'kryDishName',
    render(text) {
      return !text ? '-' : text;
    },
  },
  {
    title: '规格',
    key: 'kryDishProperty',
    render(text) {
      return !text ? '-' : text;
    },
  },
];

export default {
  name: 'dishMatch',
  data: function() {
    return {
      type: '',
      lastTime: '',
      columns: column,
      tableData: [],
      successNo: '',
      failNo: '',
    };
  },
  methods: {
    // 开始匹配
    mappingStart: function() {
      API.mapping({
        brandId: 32299,
        shopId: 810094332,
        source,
        userId: -3001,
        userName: '贺文莉',
      })
        .then(res => {
          const { result = [], successNo, failNo, code, message } = res.data;

          if (code === 0) {
            this.tableData = result || [];
            this.successNo = successNo;
            this.failNo = failNo;
          } else {
            this.$Modal.error({
              title: '提示',
              content: message,
            });
          }
        })
        .catch(e => alert(e));
    },
    // 分页
    changePage: function() {
      this.tableData = this.mappingStart();
    },
  },
  created: function() {
    source = location.href.split('=')[1];
    this.type = name[source];
  },
  mounted: function() {
    API.getLastMappingTime({ shopId: 810094332, brandId: 32299, source }).then(
      data => {
        this.lastTime = data.data.result;
      },
    );
  },
};
</script>

<style>
.dishMatch {
  width: 90%;
  margin: 0 auto;
  line-height: 40px;
}
.mappingText {
  text-align: left;
}

.mappingTitle {
  font-size: 30px;
  margin: 0 20% 0 10%;
  color: #ccc;
}

.greenColor {
  color: green;
}

.redColor {
  color: red;
}
</style>




