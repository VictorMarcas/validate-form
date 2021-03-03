// webpack.mix.js

let mix = require('laravel-mix');



mix
    .setPublicPath('dist')
    .js('src/app.js', 'js')
    .vue();