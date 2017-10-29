var _ = require('lodash'),
    child = require('child_process'),
    self = exports = module.exports = {};

self.description = 'removes all docker images';
self.example = 'udh clean';

self.help  = function() {
  console.log('clean: %s\n', self.description);
  console.log(self.example);
}

self.go = function(argv) {
  try {
    child.execSync('docker stop $(docker ps -aq)');
    child.execSync('docker rm $(docker ps -a -q)');
  } catch(e) {
    console.log('Note: No containers needed to be stopped');
  }
  child.execSync('docker rmi $(docker images -q)', { stdio: 'inherit' });
}
