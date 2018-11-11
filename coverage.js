'use strict';
const Assert = require('assert');
const Fs = require('fs');
const Path = require('path');

const COVERAGE_DIR = Path.join(__dirname, 'coverage');
const file = Fs.readdirSync(COVERAGE_DIR)[0];
const totalCov = JSON.parse(Fs.readFileSync(Path.join(COVERAGE_DIR, file)));

totalCov.result.find((x) => x.url.endsWith('transition-map/index.js'))
    .functions.forEach((f) => Assert(f.isBlockCoverage));

