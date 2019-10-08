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
            file: 'lib/umd/shiva.min.js',
            format: 'umd',
            name: 'shiva',
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
            { dir: 'lib/esm', format: 'esm' },
            { dir: 'lib/cjs', format: 'cjs' }
        ]
    }
];
