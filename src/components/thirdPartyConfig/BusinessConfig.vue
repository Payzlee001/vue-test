<template>
    <Row>
        <i-Col span="18" push="11">
            {{ data.config.name }}
        </i-Col>
        <i-Col span="6" pull="18">
         222
        </i-Col>
    </Row>
</template>

<script>
import API from '@/api';

const tp = {
  WAIMAI: { name: '美团外卖', id: 2 },
  TUANGOU: { name: '美团团购', id: 1 },
  SHANHUI: { name: '美团闪惠', id: 3 },
  YUDING: { name: '美大预订', id: 7 },
  DIANPING: { name: '美大点餐', id: 10 },
  QUEUE: { name: '美团排队' },
  SMART_RESTAURANT: { name: '美团电子菜单' },
};

const enhanceTp = config => {
  [
    'WAIMAI',
    'TUANGOU',
    'SHANHUI',
    'YUDING',
    'DIANPING',
    'QUEUE',
    'SMART_RESTAURANT',
  ].map(d => {
    return {
      name: tp[d].name,
      id: tp[d].id,
      status: config[d],
      code: d,
      url: '',
    };
  });
};

let vm;

export default {
  name: 'BusinessConfig',
  data: function() {
    return {
      config: {}
    }
  },
  created: function() {
    vm = this;
  },
  mounted: function() {
      const params = {
        shopId: 810094332,
        brandId: 32299,
      };
      API.isShowMeituanOpenButton(params).then(function(d) {
        console.log(enhanceTp(d.data.result))
        vm.config = enhanceTp(d.data.result);
      });
    }
};
</script>

