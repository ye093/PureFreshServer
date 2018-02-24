'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/', controller.home.postTest);
  router.get('/member/create', controller.member.create);
  // router.get('/syslogin', controller.sysLogin.index); // 用户登录页面

  router.get('/syslogin/success', controller.sysLogin.success); // 登录成功
  router.get('/syslogin/fail', controller.sysLogin.fail); // 登录失败
  router.get('/syslogin', app.passport.authenticate('local', { successRedirect: '/syslogin/success', failureRedirect: '/syslogin/fail' })); // 后管平台用户登录 post请求
};
