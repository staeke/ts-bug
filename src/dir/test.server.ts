import {COMMON} from 'plugins/common';
import {PLUGIN_SERVER} from 'plugins/dir/test.server';

let n:string = 1

console.log(COMMON);
console.log(PLUGIN_SERVER);

const fs = require('fs')
fs.readdirSync('.')
