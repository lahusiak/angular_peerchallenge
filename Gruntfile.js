module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }

        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: [
                    "bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            angular: {
                expand: true,
                cwd: 'node_modules/angular',
                src: [
                    "angular.min.js",
                    "angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularjsdatepicker: {
                expand: true,
                cwd: 'node_modules/angularjs_datepicker/dist',
                src: [
                    "angular-datepicker.min.css",
                    "angular-datepicker.min.js",
                    "angular-datepicker.sourcemap.map"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "*.html"

                ],
                "dest": "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: 'client/styles/',
                src: [
                    "style.css"
                ],
                "dest": "server/public/assets/styles/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};