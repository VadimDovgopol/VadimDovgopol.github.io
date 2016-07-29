module.exports = function (grunt) {
    grunt.initConfig({

         concat: {
          dist: {
            src: ['js/*.js'],
            dest: 'minjs/script.main.js',
          }
        },
        uglify: {
            js: {
                  src: 'minjs/script.main.js'
                , dest: 'minjs/script.main.min.js'
            }
        }
        ,
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
        },

        concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["css/*.css"],
      dest: "css/styles123.css"
    }
  },
cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'output.css': ['css/styles123.css', 'css/reset.css'],
    }
  }
}

    });
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'sass','concat', 'uglify','cssmin','concat_css']);
};
