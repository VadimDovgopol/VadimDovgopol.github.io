module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            dist: {
                src: ['js/*.js']
                , dest: 'minjs/script.main.js'
            , }
        }
        , uglify: {
            js: {
                src: 'minjs/script.main.js'
                , dest: 'minjs/script.main.min.js'
            }
        }
        , sass: {
            dist: {
                files: [{
                    expand: true
                    , cwd: 'styles'
                    , src: ['*.scss']
                    , dest: '../styles'
                    , ext: 'main.css'
      }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};
