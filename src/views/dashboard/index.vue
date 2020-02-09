<template>
  <div class="full">
    <div class="home-img flex-center">
      <div class="home-img-text">
        <h1 style="color:#ffffff;text-align: center;font-size: 70px">
          诗与远方
        </h1>
        <div
          style="font-size: 30px;color:#ffffff; text-align: center;margin-top: 60px"
          class=""
        >
          {{ obj.output }}<span class="easy-typed-cursor">|</span>
        </div>
      </div>
    </div>
    <div class="home-main-content">
      <ArticleList />
    </div>
  </div>
</template>

<script>
//组件
import ArticleList from './components/ArticleList';
//第三方插件
import EasyTyper from 'easy-typer-js';
export default {
  components: { ArticleList },
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 300,
        singleBack: false,
        sleep: 2000,
        type: 'rollback',
        backSpeed: 100,
        sentencePause: false
      },
      textData: [
        '面朝大海，春暖花开',
        '愿你一生努力，一生被爱',
        '想要的都拥有，得不到的都释怀'
      ],
      const: 0
    };
  },
  methods: {
    init() {
      this.initTyped(this.textData[this.const]);
      this.const += 1;
    },
    initTyped(input, fn, hooks) {
      const obj = this.obj;
      const typed = new EasyTyper(obj, input, this.instance, hooks);
    },
    instance() {
      if (this.const > 2) {
        this.const = 0;
        this.initTyped(this.textData[this.const]);
        this.const += 1;
      } else {
        this.initTyped(this.textData[this.const]);
        this.const += 1;
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.home-img {
  width: 100%;
  height: 100%;
  background-image: url('../../../public/img/mountions.jpg');
  background-repeat: round;
  .home-img-text {
    width: 666px;
    height: 300px;
  }
  .easy-typed-cursor {
    margin-left: 10px;
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.home-main-content {
  width: 50%;
  margin: 0 auto;
  min-width: 1000px;
}
</style>
