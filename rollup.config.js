import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
// import postcss from 'rollup-plugin-postcss'
import stylus from 'rollup-plugin-stylus'

export default {
    entry: 'src/scripts/main.js',
    dest: 'build/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        stylus({
            output: 'build/styles.css'
            // output: 'build/styles/styles.css'
        }),
        // postcss({
        //     extensions: ['.css'],
        //     plugins: [

        //     ]
        // }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/styles/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}
