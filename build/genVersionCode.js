const fs = require('fs');
const path = require('path');
(() => {
  const pkgPath = path.resolve(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const versionPath = path.resolve(__dirname, '..', 'src', 'VERSION');
  fs.writeFileSync(versionPath, pkg.version, {encoding: 'utf-8'});
})();
