#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

var fpath = path.join(__dirname, 'test/fixtures/samples/config', '/custom.json');

var data = fs.readFileSync(fpath, 'utf8');
fs.writeFileSync(fpath,
    data.replace(/\/Users\/zhangxh\/Documents\/Development\/Lab\/express-admin/g, __dirname)
);
