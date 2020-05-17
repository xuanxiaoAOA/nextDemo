const nextRoutes = require('next-routes');
const pkg = require('../package').config;
const routes = nextRoutes();

const vd = pkg.vd;

// 通过这种方式添加的路由,页面之间可以单页跳转
// routes.add([name], pattern = /name, page = name)
routes
.add('index', `${vd}/index`, 'index')
.add('questions', `${vd}/questions`, 'questions')
.add('booking', `${vd}/booking`, 'booking')
.add('package', `${vd}/package`, 'package')
.add('cancel', `${vd}/cancel`, 'cancel')
.add('detail', `${vd}/detail`, 'detail')
.add('comment', `${vd}/comment`, 'comment')
.add('map', `${vd}/map`, 'map')
.add('custom', `${vd}/custom`, 'custom')
.add('scene', `${vd}/scene`, 'scene');

module.exports = routes;
