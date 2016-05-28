module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    './public/min-safe/site/angular/app.js',
                    './public/min-safe/site/angular/services/*.js',
                    './public/min-safe/site/angular/controllers/*.js',
                    './public/min-safe/site/angular/controllers/dashboard/*.js'
                ],
                dest: './public/min/app.js'
            },
            vendor: { 
                src: [
                    './public/site/js/bootstrap.min.js',
                    './public/site/js/flexslider.min.js',
                    './public/site/js/lightbox.min.js',
                    './public/site/js/masonry.min.js',
                    './public/site/js/ytplayer.min.js',
                    './public/site/js/countdown.min.js',
                    './public/site/js/smooth-scroll.min.js',
                    './public/site/js/parallax.js',
                    './public/site/js/scripts.js',
                    './public/site/js/knob.js',
                    './public/site/js/spin.js',
                    './public/site/js/moment.js',
                    './public/site/js/pi.init.tab.js',
                    './public/site/js/jquery.form.js',
                    './public/site/angular/thirdparty/fileupload/angular-file-upload-shim.js',
                    './public/site/bower_components/angular/angular.min.js',
                    './public/site/bower_components/angular-sanitize/angular-sanitize.min.js',
                    './public/site/angular/thirdparty/fileupload/angular-file-upload.js',
                    './public/site/bower_components/angular-resource/angular-resource.js'
                ],
                dest: './public/min/vendor.js'
            }

        },
        uglify: {
            js: { // target
                src: ['./public/app/main.js'],
                dest: './public/app/main.js'
            }
            // vendor: { // target
            //     src: ['./public/min/vendor.js'],
            //     dest: './public/min/vendor.js'
            // }
        }



        //grunt task configuration will go here     
    });

    //load grunt task
//    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-ng-annotate');

    //register grunt default task
    grunt.registerTask('default', ['uglify']);
}