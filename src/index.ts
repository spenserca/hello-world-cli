#!/usr/bin/env node

const clear = require('clear');
import { program } from 'commander';

const version = require('../package.json').version;

clear();

program.version(version)
  .option('-P, --person <name>', 'The person to greet', 'World');

program.parse(process.argv);

console.log(`Hello, ${program.person}!`);
