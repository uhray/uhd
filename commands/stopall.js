var _ = require('lodash'),
    child = require('child_process'),
    self = exports = module.exports = {};

self.description = 'stops all docker containers';
self.example = 'udh stopall';

self.help  = function() {
  console.log('stopall: %s\n', self.description);
  console.log(self.example);
}

self.go = function(argv) {
  child.execSync('docker stop $(docker ps -aq)');
  child.execSync('docker rm $(docker ps -a -q)');
}
