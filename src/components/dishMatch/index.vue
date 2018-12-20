// 模板
<template>
  <div class="dishMatch">
    <Row class="dishMatch_header">
          <i-Col span="18" push="11">
          <Button  
            v-for="(data, index) in names" 
            :disabled="data.status"
            :key="index"
            @click="toMapping(index)"
          > 
            {{ data.name }}
          </Button>
        </i-Col>
        <i-Col span="6" pull="18">
          第三方商品映射
        </i-Col>
    </Row>
    <Tabs size="small">
      <TabPane label="匹配须知">
        <h2>请勿在第三方外卖为商品添加属性信息。</h2>
        <h2>请勿在第三方外卖上线套餐、配料。</h2>
        <ul class="dishMatch_text">
          <li>以下情况将导致无法正常下单或产生令人困惑的订单：</li>
          <li>1. 两边商品名称、规格不一致。</li>
          <li>2. 两边商品沽清状态、上架状态不一致。</li>
          <li>3. 两边商品可售时间冲突。</li>
          <li>4. 两边商品库存设置冲突。</li>
          <li>5. 匹配状态为“失败”时，上线第三方外卖门店。</li>
          <li>6. 在第三方外卖增加新商品后未重新匹配。</li>
        </ul>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import API from '../../api';
import { getDefaultParams } from '../../share/commonHelp.js';

let vm;
const tp = {
  baidu: { name: '饿了么星选', status: false, type: 6 },
  meituan: { name: '美团外卖', status: false, type: 16 },
  eleme: { name: '饿了么', status: false, type: 10 },
  jddj: { name: '京东到家', status: false, type: 21 },
};

const enhanceTp = (result = {}) =>
  ['baidu', 'meituan', 'eleme', 'jddj'].map(d => {
    return {
      name: tp[d].name,
      status: result[d],
      type: tp[d].type,
    };
  });

export default {
  name: 'DishMatchHome',
  data: function() {
    // 必须要有返回，不然渲染会报错
    return {
      names: [],
      message: '你好',
    };
  },
  methods: {
    toMapping: function(e) {
      const result = this.names.filter((d, index) => index === e);

      this.$router.push({
        path: '/dishMatch',
        query: { type: result[0].type },
      });
    },
  },
  created: function() {
    vm = this;
  },
  mounted: function() {
    const content = {
      shopId: 810094332,
      brandId: 32299,
    };
    API.isOpenPaltform({ ...getDefaultParams, content }).then(function(d) {
      const data = JSON.parse(d.data);
      vm._data.names = enhanceTp(data.result);
    });
  },
};
</script>

<style>
.dishMatch {
  width: 90%;
  margin: 0 auto;
  line-height: 40px;
}
.dishMatch_header {
  background: #ddd;
}
.dishMatch_text {
  width: 40%;
  margin: 0 auto;
  font-size: 18px;
  text-align: left;
}

.dishMatch h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 60px;
  color: red;
}
</style>




