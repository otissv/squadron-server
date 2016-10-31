import glob from 'glob';
import path from 'path';

const config = {
  base    : './',
  folder  : './api',
  ext  : '-test.js',
  options : {
    ignore: './node_modules/**'
  }
};


function resolveBase (base, filePath) {
  return path.resolve(__dirname, `${base}${filePath}`);
};


function runTest (files) {
  files.forEach(file => {
    const tests = resolveBase(config.base, file);

    require(`${tests}`);
  });
}

function requireFiles (config) {
  const ext = config.ext || '';
  const pattern = `${config.folder}/**/*${ext}`;


  glob(pattern, config.options, (err, files) => {
    if (err) {
      throw new Error(err);
    }

    runTest(files);
  });
};

export default requireFiles(config);
