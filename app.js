// 本地账号密码鉴权
const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
   /*  app.once('server', server => {
        console.log("00000000000->app started!!!!");
    });

    app.on('error', (err, ctx) => {

    });

    app.on('request', ctx => {
        // log receive request
        console.log("收到请求" + ctx.URL.host);
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        // log total cost

        console.log("响应" + ctx.used);
    }); */

    // 定义一个对象可以在全局拿到 测试数据
    app.data = {
        body: 'Hello, YeJY!!! NvLi FengDou'
    };

    // 验证用户相关
    // 挂载 strategy
    app.passport.use(new LocalStrategy({
        passReqToCallback: true,
    }, (req, username, password, done) => {
        // format user
        const user = {
            provider: 'local',
            username,
            password
        };
        // debug('%s %s get user: %j', req.method, req.url, user);
        app.passport.doVerify(req, user, done);
    }));
    // 处理用户信息
    app.passport.verify(async (ctx, user) => {
        // 查用户表，看看username password是否正确
        const mUser = ctx.service.sysUser.findOne(user.username, user.password);
        return mUser;
    });
    // 将用户信息序列化后存进 session 里面
    app.passport.serializeUser(async (ctx, user) => {
        // 处理 user
        // ...
        // return user;
        /* const mUser = {
            user_id: user.user_id
        };
        ctx.session.user = mUser; */
        ctx.session.user_id = user.user_id
        return user;
    });
    // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
    app.passport.deserializeUser(async (ctx, user) => {
        // 处理 user
        // ...
        // return user;
        // const userId = ctx.session.user.user_id;
        // const mUser = ctx.service.sysUser.findOneById(user.user_id);
        return user;

    });
};