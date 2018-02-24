'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

//参数验证
exports.validate = {
    package: 'egg-validate',
};

//用户鉴权
exports.passport = {
    enable: true,
    package: 'egg-passport',
};

