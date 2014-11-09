module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    
    grunt.initConfig({
        concat: {
            all: {
                src: [
                    './js/lib/jquery-1.10.2.js',
                    './js/lib/json2.js',
                    './js/lib/underscore-min.js',
                    './js/lib/backbone.js',
                    './js/lib/strophe.js',
                    './js/lib/sox.strophe.pubsub.js',
                    './js/Device.js',
                    './js/Transducer.js',
                    './js/SensorData.js',
                    './js/EnodenTimetable.js',
                    './bower_components/Processing.js/processing.js'
                ],
                dest: 'dist/all.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: ""
                }
            }
        },
        watch: {}
    });

    // Load depedencies from package.json
    var taskName;
    for(taskName in pkg.devDependencies) {
        if(taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }

    // Default task(s).
    grunt.registerTask('default', ['connect:server:keepalive']);

};
