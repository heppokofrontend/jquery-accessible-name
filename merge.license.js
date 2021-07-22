const path = require('path');
const fs = require('fs-extra');
const filelist = fs.readdirSync('./lib').filter(p => p.endsWith('.js'));
const entries = filelist.map(p => [
  path.join('lib', p),
  path.join('lib', `${p}.LICENSE.txt`),
]);

for (const [filePath, licensePath] of entries) {
  const licenseText = fs.readFileSync(licensePath,  {
    encoding: 'utf-8',
  }).trim();
  const bannerText = /\/\*! For license information please see (.*?)\*\//;
  const jsCode = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  fs.writeFileSync(
    filePath,
    jsCode.replace(bannerText, licenseText)
  );

  fs.removeSync(licensePath);
}
