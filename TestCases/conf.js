var  HtmlReporter =require('protractor-beautiful-reporter'); // An example configuration file. 

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['.\TestCases\TC1.js'],
  //specs:['C:\Users\siddh\OneDrive\Documents\ProtractorAutomation\TestCases\TC1.js']

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Report/screenshots'
    }).getJasmine2Reporter());
 }
}

