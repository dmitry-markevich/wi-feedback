module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: {
                    'dist/css/wi-feedback.min.css': [
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
                    ]
                }
            }
        },

        copy: {
            step1: {
                files: [
                    {
                        src: ['src/wi-feedback.php'],
                        dest: 'dist/blocks/wi-feedback.php'
                    }, {
                        src: ['src/wi-feedback-conf.php'],
                        dest: 'dist/blocks/wi-feedback-conf.php.sample'
                    }
                ]
            },
            step2: {
                files: [
                    {
                        expand: true,
                        cwd: 'libs/recaptcha/',
                        src: ['**'],
                        dest: 'dist/blocks/recaptcha/'
                    }, {
                        expand: true,
                        cwd: 'dist/',
                        src: ['**'],
                        dest: 'demo/'
                    }
                ]
            }
        },

        usebanner: {
            target: {
                options: {
                    position: 'replace',
                    replace: '//banner//',
                    banner: '/* <%= pkg.name %> - v <%= pkg.version %> */'
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
                tasks: ['cssmin', 'uglify', 'copy:step1', 'usebanner', 'copy:step2']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['cssmin', 'uglify', 'copy:step1', 'usebanner', 'copy:step2']);
}
