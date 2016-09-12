module.exports = function (grunt) {

    // Project configuration.
    var dirs = ['index.js', 'lib/*.js', 'test/*.js'];
    grunt.initConfig({
        jshint: {
            options: {
                esversion: 6
            },
            files: dirs
        },
        watch: {
            files: dirs,
            tasks: ['jshint']
        }
    });

    // Load the plugin that provides the "jshint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};