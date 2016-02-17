module.exports = function(grunt) {
var mozjpeg = require('imagemin-mozjpeg');

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
        tasks: ['uglify']
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
    imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      //files: {                         // Dictionary of files
      //  'images/about-img.png': 'images/about-img.png' // 'destination': 'source'
      // }
    },
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'images/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'images/'                  // Destination path prefix
      }]
    }
  },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'javascripts/*.js']
    }
    
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register the default tasks.
  grunt.registerTask('default', ['watch', 'jshint', 'uglify', 'imagemin']);
};
