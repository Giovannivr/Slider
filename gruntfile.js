'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
	sass: {
        dist: {
          files: {
            'scss/index.css': 'scss/index.scss'
          }
        }
      },
	
	watch: {
         sass: {
             files: ['*.scss'],
             tasks: ['sass'],
             options: {
                 spawn: false,
             },
         },
     },
	
  });

  // Load the Grunt plugins.
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass','watch']);

};