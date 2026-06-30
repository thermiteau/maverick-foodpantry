/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-continue */
// postinstall.js
const fs = require('fs');

const nodeVersion = 'node 10';

// Patch to node_modules/*
const patch = (staticPath) => {
  const folderNames = fs.readdirSync(staticPath);
  for (const folderName of folderNames) {
    const stats = fs.statSync(`${staticPath}/${folderName}`);
    if (!stats.isDirectory()) continue;

    try {
      const packageFilePath = `${staticPath}/${folderName}/package.json`;
      const browserListFilePath = `${staticPath}/${folderName}/.browserslistrc`;
      const packageFileData = JSON.parse(fs.readFileSync(packageFilePath));

      delete packageFileData.browserslist;
      fs.writeFileSync(browserListFilePath, nodeVersion);
      fs.writeFileSync(
        packageFilePath,
        JSON.stringify(packageFileData, null, 2),
      );

      // Patch to node_modules/*/node_modules/*
      const nestedModulePath = `${staticPath}/${folderName}/node_modules`;
      if (fs.existsSync(nestedModulePath)) patch(nestedModulePath);
    } catch (e) {}
  }
};

patch('./node_modules');
console.log('All browserlist has been updated.');
