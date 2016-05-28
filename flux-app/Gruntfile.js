module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: { // target
                src: ['./public/app/app.js'],
                dest: './public/app/app.js'
            }
        }


        //grunt task configuration will go here     
    });

    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //register grunt default task
    grunt.registerTask('default', ['uglify']);
}