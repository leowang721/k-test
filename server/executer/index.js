/**
 * @file 入口执行器，根据不同的 type 生成不同的实例
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

module.exports = exports = {
  create(opts = {}) {
    const type = opts.type;
    if (!type) {
      throw new Error('必须为执行器指定类型 type');
    }
    const TypeClass = require(`./${type}`);
    if (!TypeClass) {
      throw new Error('指定的执行器类型不存在');
    }
    return new TypeClass(opts);
  }
};
