'use strict'

const Service = require('egg').Service;

class SysUserService extends Service {

    // 根据用户名密码 验证用户是否存在
    async findOne(username, password) {
        const {app} = this;
        const client = app.mysql.get('serp');
        const user = await client.get('sys_user', {user_name: username, password});
        return user;
    }

    // 此方法不暴露出去
    async findOneById(user_id) {
        const client = this.app.mysql.get('serp');
        const user = await client.get('sys_user', {user_id});
        return user;
    }
}

module.exports = SysUserService;