module.exports = function (grunt) {
    grunt.initConfig({
//         concat: {
//          dist: {
//            src: ['js/*.js'],
//            dest: 'minjs/script.main.js',
//          }
//        },
//        uglify: {
//            js: {
//                  src: 'minjs/script.main.js'
//                , dest: 'minjs/script.main.min.js'
//            }
//        }
//        ,
        sass: {
            dist: {
                files: [{
                    expand: true
                    , cwd: 'styles'
                    , src: ['*scss']
                    , dest: 'css'
                    , ext: '.css'
            }]
            }
        }
        , watch: {
            sass: {
                files: ['styles/*.scss']
                , tasks: ['sass']
            , }
        }
    });
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.logtadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};
