/** @format */

const fs = require('fs');
const path = require('path');

const srcFile = path.resolve(__dirname, '..', 'package.json');
const distFile = path.resolve(__dirname, '..', 'dist', 'package.json');
const distDir = path.resolve(__dirname, '..', 'dist');

const json = fs.readFileSync(srcFile, { encoding: 'utf-8' });
const pkg = JSON.parse(json);

const output = {
  ...pkg,
  scripts: {},
  devDependencies: {},
  main: pkg.main.replace('dist/', ''),
  module: pkg.module.replace('dist/', ''),
  browser: pkg.browser.replace('dist/', ''),
  types: pkg.types.replace('dist/', ''),
};

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(distFile, JSON.stringify(output, null, 2));
