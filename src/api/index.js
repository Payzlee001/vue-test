import request from '../share/request.js';

export default {
  getUserInfo: params =>
    request.get(
      'https://citestb.shishike.com/gatewaybui/api/user/userInfo',
      params,
    ),
    // 商品映射
  isOpenPaltform: params =>
    request.post(
      'https://citestb.shishike.com/gatewaybui/api/takeout/open/check',
      params,
    ),
  getLastMappingTime: params => request.post('https://citestb.shishike.com/gatewaybui/api/thirdDishMapping/getLastMappingTime', params),
  mapping: params => request.post('https://citestb.shishike.com/gatewaybui/api/thirdDishMapping/mapping', params),

  // 第三方配置-业务开通
  isShowMeituanOpenButton: params =>
    request.post(
      'https://citestb.shishike.com/gatewaybui/api/thirdBusinessDredge/meituan/isShowMeituanOpenButton',
      params,
    ),
  
};
