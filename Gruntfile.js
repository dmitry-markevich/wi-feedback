module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: {
                    'dist/css/wi-feedback.min.css': [
                        'libs/mfp/magnific-popup.css',
                        'src/wi-feedback.css'
                    ],
                    'demo/css/wi-feedback.min.css': [
                        'libs/mfp/magnific-popup.css',
                        'src/wi-feedback.css'
                    ]
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/js/wi-feedback.min.js': [
                        'libs/mfp/jquery.magnific-popup.js',
                        'src/wi-feedback.js'
                    ],
                    'demo/js/wi-feedback.min.js': [
                        'libs/mfp/jquery.magnific-popup.js',
                        'src/wi-feedback.js'
                    ]
                }
            }
        },

        concat: {
            target: {
                files: {
                    'dist/blocks/wi-feedback.php': ['src/wi-feedback.php'],
                    'dist/blocks/wi-feedback-conf.php.sample': ['src/wi-feedback-conf.php'],
                    'demo/blocks/wi-feedback.php': ['src/wi-feedback.php'],
                    'demo/blocks/wi-feedback-conf.php': ['src/wi-feedback-conf.php']
                }
            }
        },

        usebanner: {
            target: {
                options: {
                    position: 'replace',
                    replace: '//banner//',
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> */'
                },
                files: {
                    src: ['dist/**/*.{css,js,php}']
                }
            }
        },

        watch: {
            options: {
                spawn: false,
            },
            target: {
                files: 'src/**/*',
                tasks: ['cssmin', 'uglify', 'concat', 'usebanner']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify', 'concat', 'usebanner']);
}
