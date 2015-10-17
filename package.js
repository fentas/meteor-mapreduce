Package.describe({
  "summary": "Proper MongoDB mapReduce support for Meteor",
  "version": "0.1.0",
  "git": "https://github.com/fentas/meteor-mapreduce.git",
  "name": "fentas:mapreduce"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest', 'accounts-password'
  ], ['server']);

  // common before
  api.addFiles([
    'test.js'
  ], ['server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['mongo-livedata', 'meteorhacks:collection-utils@1.2.0'], ['server']);

  // common before
  api.addFiles([
    'index.js',
  ], ['server']);
}
