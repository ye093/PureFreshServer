'use strict';

const Controller = require('egg').Controller;

// 此控制器暂时用于测试
class HomeController extends Controller {
  async index() {
    const {ctx, service} = this;
    // const res = await service.sysUser.findOne('snaker', 'f9e1a0299c2570eb5942fbbda0b2a8ceb2ef9769');
    // const res = await service.sysUser.findOneById(4);
    ctx.session.aa = 11;
    ctx.body = '你好啊啊啊';
    ctx.status = 200;
  }

  async postTest() {
    const {ctx} = this;
    const createRule = {
      name: {type: 'string'}
    };
    ctx.validate(createRule);

    ctx.body = {msg: 'BODY提交成功！你提交的参数为：' + ctx.request.body.name};
    ctx.status = 201;
  }
}

module.exports = HomeController;
