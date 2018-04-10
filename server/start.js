// 启动 server

const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const serveStatic = require('koa-static');
const log = require('typelog');

const config = require('./config');

const app = new Koa();

app.use(serveStatic(config.SERVER.ROOT, {index: 'index.html'}));

app.listen(config.SERVER.PORT);
log.info(`Server started at ${config.SERVER.PROTOCOL}://${config.SERVER.HOST}:${config.SERVER.PORT}`);
