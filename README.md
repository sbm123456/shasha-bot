# koishi bot 
基于koishi开发的QQ机器人

## 运行项目
```js 
安装node环境
1. 安装依赖（使用 npm 或者 yarn）
npm install 或 yarn

2. 打开 go-cqhttp
.\go-cqhttp.exe faststart 

3. 通过node运行index.js主文件
node .
```

## 机器人功能文档
```
/复读 三次以上概率复读
/用户占卜很低的时候 发送暖男语录
/抽卡 （抽占星卡）
/刮刮乐 仙人微彩计算器网站
/快速发送ff14有关网站
/官网新闻订阅
/狩猎车查询


/节假日问候 （待做）

/高情商回复 （待做）
```

### 技术栈

```
// 计时任务 node-schedule 一个nodejs库
npm i node-schedule -D
const nodeSchedule = require("node-schedule");
// 每天八点触发
nodeSchedule.scheduleJob("0 0 8 * * *", () => {
  bot.sendMessage("635246373", "/占卜");
})

//Puppeteer 是一个提供一系列高级接口通过 DevTools（开发者工具）协议去控制 Chrome 或者 Chromium（谷歌开源）的 Node 库。
cnpm i puppeteer -D
```

