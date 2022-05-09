**通知：最新的低代码大屏系统GoView已开源，详见：[https://gitee.com/MTrun/go-view](https://gitee.com/MTrun/go-view)**

![输入图片说明](https://gitee.com/MTrun/go-view/raw/master/readme/logo-t-y.png)

## 一、项目描述

- 一个基于 Vue、Datav、Echart 框架的 " **数据大屏项目** "，通过 Vue 组件实现数据动态刷新渲染，内部图表可实现自由替换。部分图表使用 DataV 自带组件，可进行更改，详情请点击下方 DataV 文档。

- [**Vue3 版本请点击这里查看，使用 Hooks+TypeScript 实现，全新内容等你探索!**](https://gitee.com/MTrun/vue-big-screen-plugin)
- [**React 版本请点击这里查看，全新界面超级好看！！！**](https://gitee.com/MTrun/react-big-screen)
- 项目需要全屏展示（按 F11）。
- 项目部分区域使用了全局注册方式，增加了打包体积，在实际运用中请使用 **按需引入**。
- 拉取项目之后，建议按照自己的功能区域重命名文件，现以简单的位置进行区分。
- 项目环境：Vue-cli-3.0、DataV-2.7.3、Echarts-4.6.0(如果5.x版本有问题，请切换到4.x版本)、Webpack-4.0、Npm-6.13、Node-v12.16。
- 请拉取 master 分支的代码，其余分支是开发分支。
- 需要其它地图数据的，请查看我的其它项目（有一个地图合集）

友情链接：

1.  [Vue 官方文档](https://cn.vuejs.org/v2/guide/instance.html)
2.  [DataV 官方文档](http://datav.jiaminghi.com/guide/)
3.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API 文档](https://echarts.apache.org/zh/api.html#echarts)

项目展示
![项目展示](https://images.gitee.com/uploads/images/2020/1208/183608_b893a510_4964818.gif "20201208_221020.gif")

## 二、主要文件介绍

| 文件                | 作用/功能                                                              |
| ------------------- | --------------------------------------------------------------------- |
| main.js             | 主目录文件，引入 Echart/DataV 等文件                                    |
| utils               | 工具函数与 mixins 函数等                                                |
| views/ index.vue    | 项目主结构                                                             |
| views/其余文件       | 界面各个区域组件（按照位置来命名）                                       |
| assets              | 静态资源目录，放置 logo 与背景图片                                       |
| assets / style.scss | 通用 CSS 文件，全局项目快捷样式调节                                      |
| assets / index.scss | Index 界面的 CSS 文件                                                  |
| components/echart   | 所有 echart 图表（按照位置来命名）                                      |
| common/...          | 全局封装的 ECharts 和 flexible 插件代码（适配屏幕尺寸，可定制化修改）     |

## 三、使用介绍

### 启动项目

需要提前安装好 `nodejs` 与 `yarn`,下载项目后在项目主目录下运行 `yarn` 拉取依赖包。安装完依赖包之后然后使用 `vue-cli` 或者直接使用命令`npm run serve`，就可以启动项目，启动项目后需要手动全屏（按 F11）。如果编译项目的时候提示没有 DataV 框架的依赖，输入 `npm install @jiaminghi/data-view` 或者 `yarn add @jiaminghi/data-view` 进行手动安装。

### 封装组件渲染图表

所有的 ECharts 图表都是基于 `common/echart/index.vue` 封装组件创建的，已经对数据和屏幕改动进行了监听，能够动态渲染图表数据和大小。在监听窗口小大的模块，使用了防抖函数来控制更新频率，节约浏览器性能。

项目配置了默认的 ECharts 图表样式，文件地址：`common/echart/theme.json`。

封装的渲染图表组件支持传入以下参数，可根据业务需求自行添加/删除。

参数名称              | 类型      | 作用/功能                      |
| -------------------| --------- | ------------------------------|
| id                 | String    | 唯一 id，渲染图表的节点（非必填，使用了 $el）|
| className          | String    | class样式名称（非必填）                 |
| options            | Object    | ECharts 配置（必填）                   |
| height             | String    | 图表高度（建议填）                    |
| width              | String    | 图表宽度（建议填）                    |

### 动态渲染图表

动态渲染图表案例为 `components` 目录下各个图表组件，index 文件负责数据获取和处理，chart 文件负责监听和数据渲染。

chart 文件的主要逻辑为：

```html
<template>
  <div>
    <Echart :options="options" id="id" height="height" width="width" ></Echart>
  </div>
</template>

<script>
  // 引入封装组件
import Echart from '@/common/echart'
export default {
  // 定义配置数据
  data(){ return { options: {}}},
  // 声明组件
  components: { Echart},
  // 接收数据
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  // 进行监听，也可以使用 computed 计算属性实现此功能
  watch: {
    cdata: {
      handler (newData) {
        this.options ={
          // 这里编写 ECharts 配置
        }
      },
      // 立即监听
      immediate: true,
      // 深度监听
      deep: true
    }
  }
};
</script>
```

### 复用图表组件

复用图表组件案例为中间部分的 `任务通过率与任务达标率` 模块，两个图表类似，区别在于颜色和主要渲染数据。只需要传入对应的唯一 id 和样式，然后在复用的组件 `components/echart/center/centerChartRate` 里进行接收并在对应位置赋值即可。

如：在调用处 `views/center.vue` 里去定义好数据并传入组件

```js
//组件调用
<span>今日任务通过率</span>
<centerChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />

<span>今日任务达标率</span>
<centerChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />

...
import centerChart from "@/components/echart/center/centerChartRate";

data() {
  return {
    rate: [
      {
        id: "centerRate1",
        tips: 60,
        ...
      },
      {
        id: "centerRate2",
        tips: 40,
        colorData: {
          ...
        }
      }
    ]
  }
}
```

### 更换边框

边框是使用了 DataV 自带的组件，只需要去 views 目录下去寻找对应的位置去查找并替换就可以，具体的种类请去 DavaV 官网查看
如：

```html
<dv-border-box-1></dv-border-box-1>
<dv-border-box-2></dv-border-box-2>
<dv-border-box-3></dv-border-box-3>
```

### 更换图表

直接进入 `components/echart` 下的文件修改成你要的 echarts 模样，可以去[echarts 官方社区](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)里面查看案例。

### Mixins 解决自适应适配功能

使用 mixins 注入解决了界面大小变动图表自适应适配的功能，函数在 `utils/resizeMixins.js` 中，应用在 `common/echart/index.vue` 的封装渲染组件，主要是对 `this.chart` 进行了功能注入。

### 屏幕适配

1.5 版本项目放弃了 flexible 插件方案，将 rem 改回px，使用更流程通用的 `css3：scale` 缩放方案，通过 `ref` 指向 `views/index`，屏幕改变时缩放内容。项目的基准尺寸是 `1920px*1080px`，所以支持同比例屏幕 100% 填充，如果非同比例则会自动计算比例居中填充，不足的部分则留白。实现代码在 `src/utils/userDraw` ，如果有其它的适配方案，欢迎交流。

### 请求数据

现在的项目未使用前后端数据请求，建议使用 axios 进行数据请求，在 main.js 位置进行全局配置。

- axios 的 main.js 配置参考范例（因人而异）

```js
import axios from 'axios';

//把方法放到vue的原型上，这样就可以全局使用了
Vue.prototype.$http = axios.create({
  //设置20秒超时时间
  timeout: 20000,
  baseURL: 'http://172.0.0.1:80080', //这里写后端地址
});
```

## 四、更新情况

1. 增加了 Echart 组件复用的功能，如：中间任务达标率的两个百分比图使用的是同一个组件。
2. 修复了头部右侧的图案条不对称的问题。
3. 使用 Mixins 注入图表响应式代码（scale方案之后无需使用）。
4. vue-awesome 改成按需引入的方式。
5. 封装渲染函数，抽离了数据使逻辑更加清晰。
6. 新增地图组件，并添加自动轮播功能
7. 将适配方案从 rem 改成 scale

## 五、反馈
QQ群二维码：

![输入图片说明](public/image.png)

## 六、相关大屏案例
（以下案例基于此项目二次开发）：

1. https://gitee.com/memeda520/IofTV-Screen

## 五、七、其余

这个项目是个人的作品，难免会有问题和 BUG，如果有问题请进行评论，我也会尽力去更新，自己也在前端学习的路上，欢迎交流，非常感谢！