
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const needOpen = process.env.OPEN == '1';
const app = next({ dev });
const handle = app.getRequestHandler();
const config = require('./package').config;
 
app.prepare()
 .then(() => {
  const server = express();
  server.get('*', (req, res) => {
   return handle(req, res);
  });
  server.listen(config.port, (err) => {
   if (err) throw err;
   if (needOpen) {
        const opn = require('opn');
        opn(`http://localhost:${config.port}/${config.vd}index`);
    }
  });
 })
 .catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
 });