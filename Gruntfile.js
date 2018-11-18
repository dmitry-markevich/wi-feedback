module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            options: {
                sourceMap: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> */'
            },
            target: {
                files: {
                    'dist/wi-feedback.min.css': [
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
            options: {
                sourceMap: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> */'
            },
            target: {
                files: {
                    'dist/wi-feedback.min.js': [
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
            php_dist: {
                files: {
                    'dist/blocks/wi-feedback.php': ['src/wi-feedback.php']
                }
            },
            php_demo: {
                files: {
                    'demo/blocks/wi-feedback.php': ['src/wi-feedback.php']
                }
            }
        },

        watch: {
            options: {
                spawn: false,
            },
            all: {
                files: 'src/**/*',
                tasks: ['cssmin', 'uglify', 'concat']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify', 'concat']);
}
