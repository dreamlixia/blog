Rollup
---

主要命令配置
```json
"scripts": {
    "dev": "npx rollup -wc config/rollup.config.dev.js",
    "build": "npx rollup -c config/rollup.config.js"
}
```
完整 package.json
```json
{
    "name": "@lynseyjen/jlxtrysch",
    "version": "7.0.0",
    "description": "Removes all spaces from a string and console log",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/guessguess/jlxtrysch.git"
    },
    "keywords": [
        "jlxtrysch",
        "npm",
    ],
    "main": "lib/bundle.cjs.js", // 打包后入口
    "jsnext:main": "lib/bundle.esm.js",
    "module": "lib/bundle.esm.js",
    "browser": "lib/bundle.browser.js",
    "scripts": {
        "dev": "npx rollup -wc config/rollup.config.dev.js",
        "build": "npx rollup -c config/rollup.config.js",
        "build:types": "npx tsc"
    },
    "devDependencies": {
        "@babel/core": "^7.26.0",
        "@rollup/plugin-eslint": "*",
        // ...
    }
}

```

config 文件

打包用
- rollup.config.base.js
```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'lib/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/bundle.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/bundle.browser.js',
      format: 'iife',
      name: 'MyLibrary',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(), // 可选：用于压缩代码
  ],
};
```
- rollup.config.js
```js
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

import baseConfig from "./rollup.config.base";

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, terser(), filesize()],
};
```

开发用
- rollup.config.dev.js
```js
import baseConfig from "./rollup.config.base";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      contentBase: "",
      port: 8020,
    }),
    livereload("src"),
  ],
};
```