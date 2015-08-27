module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'sass/*.sass',
          'sass/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'javascripts/*.js',
          'javascripts/lib/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          outputStyle: 'compressed'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'javascripts/site.min.js': ['javascripts/site.js'],
          'javascripts/fourohfour.min.js': ['javascripts/fourohfour.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'javascripts/*.js', 'javascripts/lib/*.js']
    }
    
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register the default tasks.
  grunt.registerTask('default', ['watch', 'jshint', 'qunit', 'concat', 'uglify']);

};
