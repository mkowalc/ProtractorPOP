// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./pages/calc.js'],
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
   showColors: true, // Use colors in the command line report.
 }
};
