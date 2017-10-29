var _ = require('lodash'),
    child = require('child_process'),
    self = exports = module.exports = {};

self.description = 'run a docker container';
self.example = 'udh run REPO [COMMAND]';

self.help  = function() {
  console.log('run: %s\n', self.description);
  console.log(self.example);
}

self.go = function(argv) {
  if (!argv._[0]) { return self.help(); }
  const repo = 'uhray/' + argv._[0],
        cmd = argv._[1],
        args = [
          'run',
          '-it',
          '-p',
          '5000:5000',
          repo
        ];

  console.log('---- pulling %s -----', repo);
  child.spawnSync('docker', [
    'pull',
    repo
  ], {
    stdio: 'inherit'
  });

  console.log('---- running %s -----', repo);
  if (cmd) { args.push(cmd); }
  child.spawnSync('docker', args, {
    stdio: 'inherit'
  });
}
