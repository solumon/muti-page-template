/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { merge } = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const base = require('./webpack.config.base');
const { name, version } = require('../package.json');

const id = (() => {
  if (!fs.existsSync('.git/HEAD')) {
    return '';
  }
  const gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim();
  const ref = gitHEAD.split(': ')[1];
  let commitId = '';
  if (ref) {
    commitId = fs.readFileSync(`.git/${ref}`, 'utf-8').trim().substr(0, 8);
  } else {
    commitId = gitHEAD.length > 8 ? gitHEAD.substr(0, 8) : '';
  }
  return commitId;
})();

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new ZipPlugin({
      filename: `${name}_${version}_${id}.zip`,
    }),
  ],
});
