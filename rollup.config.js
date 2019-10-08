import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const defaults = { compilerOptions: { declaration: true } };

export default [
    {
        input: 'src/main.ts',
        plugins: [
            typescript({
                tsconfigDefaults: defaults,
                tsconfig: "tsconfig.json",
                tsconfigOverride: { compilerOptions: { declaration: false } }
            }),
            terser()
        ],
        output: {
            file: 'dist/umd/dom-plus.min.js',
            format: 'umd',
            name: 'dom-plus',
            sourcemap: true,
            esModule: false
        }
    },
    {
        input: {
            index: 'src/main.ts',
            append: 'src/append.ts',
            appendRoot: 'src/appendRoot.ts',
            component: 'src/component.ts',
            remove: 'src/remove.ts',
            removeAll: 'src/removeAll.ts'
        },
        plugins: [
            typescript({
                tsconfigDefaults: defaults,
                tsconfig: "tsconfig.json",
                tsconfigOverride: {}
            })
        ],
        output: [
            { dir: 'dist/esm', format: 'esm' },
            { dir: 'dist/cjs', format: 'cjs' }
        ]
    }
];
