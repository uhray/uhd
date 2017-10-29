#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2)),
    commands = require('require-dir')('./commands'),
    _ = require('lodash'),
    command = argv._.shift();

if (command && commands[command]) {
  if (argv.h || argv.help) {
    commands[command].help(argv);
  } else {
    commands[command].go(argv);
  }
} else if (command) {
  console.log('command %s not found', command);
} else if (argv.h || !command) {
  console.log('Uhray Docker\n');
  console.log('USAGE: uhd COMMAND\n')
  console.log('Commands:');
  _.each(commands, (obj, key) => {
    console.log('  %s: %s', key, obj.description);
  });
}
