#!/usr/bin/env node

const yargs = require("yargs");

yargs.version("1.0.0");
yargs.commandDir("commands");
yargs.parserConfiguration({
  "parse-numbers": false,
});
yargs.alias("v", "version");
yargs.help(false);
yargs.parse().argv;