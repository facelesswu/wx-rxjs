import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";


export default {
  input: 'src/index.ts',
  output: [
    {
      file: `dist/wx-rxjs.umd.js`,
      format: 'umd',
      name: 'RxWx'
    }
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    terser()
  ],
};
