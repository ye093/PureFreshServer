'use strict';

const Controller = require('egg').Controller;

// 后管平台，用户鉴权 add by YeJinYun 20180211
class SysLoginController extends Controller {
  // 需要用户名username，密码password
  async index() {
    const { ctx, service } = this;
    // 1、检验参数
    const createRule = {
      username: { type: 'string' },
      password: { type: 'string' },
    };
    ctx.validate(createRule, ctx.request.query);
    this.ctx.body = this.app.data.body;
  }

  // 执行登录
  // async doLogin() {

  // }

  // 成功登录则返回用户信息
  async success() {
    const { ctx } = this;
    ctx.session.set = true;
    if (ctx.user) {
      ctx.session.user_id = ctx.user.user_id;
      ctx.body = "会员ID为：" + ctx.user.user_id;
    } else {
      ctx.body = '登录成功';
    }
    ctx.status = 200;

  }

  // 失败则返回失败码
  async fail() {
    this.ctx.status = 403;
    this.ctx.body = '失败';

  }
}

module.exports = SysLoginController;
