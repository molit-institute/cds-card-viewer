const fs = require('fs-extra');
const path = require('path');

// Get a reference to the source locales folders
/* example:
const buildRoot = path.join(__dirname, '..', 'www', 'build', 'muppet-fans');
const srcLocales = path.join(buildRoot, 'locales');
const srcMomentLocales = path.join(buildRoot, 'moment-locales'); */
const buildRoot = path.join(__dirname, '..', 'www');
const srcLocales = path.join(buildRoot, 'i18n');

// Get a reference to the output locales folders in the dist build
/* example:
const destRoot = path.join(__dirname, '..', 'dist', 'muppet-fans');
const destLocales = path.join(destRoot, 'locales');
const destMomentLocales = path.join(destRoot, 'moment-locales'); */
const destRoot = path.join(__dirname, '..', 'dist');
const destLocales = path.join(destRoot, 'i18n');


// Copy from the source to the destination
/* example:
fs.copySync(srcLocales, destLocales);
fs.copySync(srcMomentLocales, destMomentLocales); */
fs.copySync(srcLocales, destLocales);