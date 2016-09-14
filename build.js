'use strict'

var shell = require('shelljs');
var fs = require('fs');
var path = require('path');

var style =  'node-sass www/style/main.scss | postcss -c .postcss.json';
var js = 'babel www/scripts --out-dir bin/scripts --copy-files';
var html = { i: 'www/index.html', o: 'bin/index.html' };
var assets = { i: 'www/assets/', o: 'bin/assets' };

shell.exec(style);
shell.exec(js);
shell.cp(html.i, html.o);
shell.cp('-R', assets.i, assets.o);
