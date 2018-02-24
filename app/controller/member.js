'use strict'

const Controller = require('egg').Controller;

class CrmMemberController extends Controller {

    async create() {
        const { ctx, service } = this;
        const createRule = {
            mobile: { type: 'string' },
            password: { type: 'string' },
        };
        let param = ctx.request.query;
        // 校验参数
        ctx.validate(createRule, param);
        // 组装参数
        // const author = ctx.session.userId;
        // const req = Object.assign(ctx.request.body, {  });
        // 调用 Service 进行业务处理
        const res = await service.crmMember.create(param);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 201;
    }
}

module.exports = CrmMemberController;
