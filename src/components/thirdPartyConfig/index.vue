<template>
    <Tabs value="business">
        <TabPane label="业务开通" name="business">
            <BusinessConfig></BusinessConfig>
        </TabPane>
        <TabPane label="其他配置" name="other">其他配置</TabPane>
        <TabPane label="口碑配置" name="koubei">口碑配置</TabPane>
    </Tabs>
</template>

<script>
import BusinessConfig from './BusinessConfig';

export default {
  name: 'ThirdPartyConfig',
  components: {
    BusinessConfig: BusinessConfig,
  },
};
</script>