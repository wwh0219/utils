const fs=require('fs')
const util=require('util')
let { exec } = require('child_process');
exec=util.promisify(exec)
const copyFile=util.promisify(fs.copyFile)
;(async ()=>{
 await copyFile('package.json', './lib/package.json')
 await copyFile('README.md', './lib/README.md')
 await exec('yarn build')
 await exec('cd ./lib')
 await exec('npm publish --access=public')
})()
