const fs = require('fs-extra');
const licensePath = './lib/jquery.accessible-name.min.js.LICENSE.txt';
const licenseText = fs.readFileSync(licensePath,  {
  encoding: 'utf-8',
}).trim();
const bannerText = '/*! For license information please see jquery.accessible-name.min.js.LICENSE.txt */';
const jsCode = fs.readFileSync('./lib/jquery.accessible-name.min.js', {
  encoding: 'utf-8',
});

fs.writeFileSync(
  './lib/jquery.accessible-name.min.js',
  jsCode.replace(bannerText, licenseText)
);

fs.removeSync(licensePath);
