'use strict'

const Service = require('egg').Service;

class CrmMemberService extends Service {

    async find(memberId) {
        const client = app.mysql.get('serp');
        const members = await client.find('crm_member', {member_id: 1});
        return members;
    }

    // 增
    async create(params) {
        const client = this.app.mysql.get('serp');
        const result = await client.insert('crm_member', params);
        return result;
    }
}

module.exports = CrmMemberService;