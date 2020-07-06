'use strict';
const axios = require('axios');
const Controller = require('./base');

let bilibili = {
  async api(url, params) {
    console.log(url, params);

    let res = await axios.get(url, {
      params: {
        ...params
      }
    })
    return res.data;

  }
}

//-------------------------------------------------------------------------
// # 个人
//-------------------------------------------------------------------------
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  // relation_stat
  async relation_stat() {
    const { ctx, app } = this;
    const apiQuery = ctx.query;
    let result = await bilibili.api(`${this.config.bilibili_url}/x/relation/stat`, apiQuery);
    if (result.code !== 0) {
      return this.fail(result.code, result.message);
    }
    this.success(result.data);
  }

  // space_acc_info
  async space_acc_info() {
    const { ctx, app } = this;
    const apiQuery = ctx.query;
    let result = await bilibili.api(`${this.config.bilibili_url}/x/space/acc/info`, apiQuery);
    if (result.code !== 0) {
      return this.fail(result.code, result.message);
    }
    this.success(result.data);
  }

}


module.exports = UserController;