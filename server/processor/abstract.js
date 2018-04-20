/**
 * @file 供继承的父类
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

const EventEmitter = require('events');
const Executer = require('../executer');

class AbstractProcessor extends EventEmitter {
  constructor(opts) {
    this.pool = [];
    if (opts) {
      [].concat(opts).forEach(opt => {
        this.pool.push(new Executer(opt));
      });
    }
  }
}

module.exports = exports =
