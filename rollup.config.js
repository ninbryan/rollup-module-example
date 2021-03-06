import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry:'src/index.js',
  indent:true,
  sourceMap:true,
  plugins:[
    json(),
    babel({exclude:'node_modules/**'})
  ],
  moduleName:'rollupModuleExample',
  format:'umd',
  dest:'dist/index.js'
};