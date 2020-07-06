'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {

  /**
   * 成功响应
   * @param {*} data - 响应返回的数据
   */
  success (data) {
    this.ctx.body = {
      code: 200,
      msg: 'success',
      data,
    };
  }

  /**
   * 错误响应
   * @param {*} code - 错误码
   * @param {*} msg - 错误描述
   */
  fail (code, msg) {
    this.ctx.body = {
      code,
      msg,
    };
  }

  /**
   * 未找到响应
   * @param {*} msg - 响应信息描述
   */
  notFound (msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }

  positionToEnum (position) {
    const array = ['FIRST_PAGE', 'PREVIOUS', 'NEXT', 'LAST_PAGE'];

    if (position < 1 || position > 4) {
      return;
    }
    return array[position - 1];
  }

}

module.exports = BaseController;
