const fs = require("fs");
const {
  s,
  Random
} = require('koishi-core')
module.exports = async (text) => {
  const nametext = text.args[0];
  const groupId = text.session.groupId;
  const userId = text.session.author.userId;
  try {
    // const str = content.session.content;
    if (!nametext || !groupId) return;
    let list = JSON.parse(fs.readFileSync('store/hotSearch.json'));
    if (nametext in list && list[nametext].userId.includes(groupId)) { // 如果搜索到重复的
      list[nametext].userId = list[nametext].userId.filter(item => item !== groupId);
      if (list[nametext].userId.length === 0) {
        delete list[nametext];
      }
      await fs.writeFileSync(
        `store/hotSearch.json`,
        JSON.stringify(list),
        "utf-8"
      );
      return `对【${nametext}】订阅已取消! ${s('face', { id: `${Random.int(172, 183)}` })}`;
    } else {
      return `未订阅【${nametext}】该微博! ${s('face', { id: `${Random.int(96, 111)}` })}`;
    }
  } catch (err) {
    console.log("失败啦", err);
    return `取消订阅失败! ${s('face', { id: `${Random.int(0, 39)}` })}\n 未知原因。`
  }
}