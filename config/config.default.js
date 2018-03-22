'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518079848978_2024';

  // add your config here
  config.middleware = [];

  //配置mysql
  config.mysql = {
    clients: {
      // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
      serp: {
        // host
        host: '',
        // 端口号
        port: '3306',
        // 用户名
        user: '',
        // 密码
        password: '',
        // 数据库名
        database: '',
      },
      // db2: {
      //   // host
      //   host: 'mysql2.com',
      //   // 端口号
      //   port: '3307',
      //   // 用户名
      //   user: 'test_user',
      //   // 密码
      //   password: 'test_password',
      //   // 数据库名
      //   database: 'test',
      // },
      // // ...
    },
    // 所有数据库配置的默认值
    default: {
  
    },
  
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  config.security = {
      csrf: {
        useSession: false, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
        cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
        sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
        headerName: 'x-csrf-token',
        bodyName: '_csrf',
        queryName: '_csrf',
      },
    };

  return config;
};
