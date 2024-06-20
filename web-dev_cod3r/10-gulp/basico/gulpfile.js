const gulp = require('gulp');
const {series, parallel} = require('gulp');

const antes1 = cb => {
    console.log('Tarefa antes1!');
    return cb();
}

const antes2 = cb => {
    console.log('Tarefa antes2!');
    return cb();
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        //.pipe(trasnformacaoA())
        //.pipe(trasnformacaoB())
        //.pipe(trasnformacaoC())
        .pipe(gulp.dest('pastaB'))
    return cb();
}

const fim = cb => {
    console.log('Tarefa fim!');
    return cb();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);