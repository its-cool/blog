<template>
  <div>
    <el-card class="artlicle-List">
      <div slot="header">
        <div class="flex-center-align">
          <el-divider
            direction="vertical"
            class="article-title-icon"
          ></el-divider>
          <span class="article-title">关于vue的conputed和watch的比较</span>
        </div>
        <div class="padding-base">
          <span class="margin-right-medium"
            ><i class="margin-right-base iconfont icon-rili"></i>2020-2-8</span
          >
          <span class="margin-right-medium"
            ><i class="margin-right-base iconfont icon-biaoqian"></i>技术</span
          >
        </div>
      </div>
      <div class="artlicle-list-main">
        <p class="article-disc">
          jldfhdghdsfhdsfhksdfhkashdfuiwehfkdjfdsahfksjahdfkjsfhkwehuifhskjh是开放的金额后恢复你说的肌肤开始放暑假包括二百块能开发二维空间发好地方，但是宽容和宽容健康角度hiu范围忽然看见忙不ID方法和股份为日本iu很尴尬独守空房肯认可和贷款减肥呢空间会很快三季度分撒后饭呢框架合同儿科南方科技文化日K后的失落的愤怒地去我看见别人好偶觉得你烦符文阔剑日本货看到的没办法客户可能发动布卡武二年
        </p>
        <div class="article-img">
          <el-image src="">
            <div></div>
          </el-image>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'index'
};
</script>

<style lang="scss" scoped>
.artlicle-List {
  margin-top: 20px;
  .article-title-icon {
    width: 5px;
    height: 50px;
    background-color: #000000;
  }
  .article-title {
    font-size: 34px;
    font-weight: 600;
  }
  .artlicle-list-main {
    .article-disc {
      font-size: 16px;
      font-family: 'Helvetica Neue', Helvetica, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
      letter-spacing: 1px;
      line-height: 26px;
      text-indent: 2em;
    }
  }
}
</style>
