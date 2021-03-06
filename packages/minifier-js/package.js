Package.describe({
  summary: "JavaScript minifier",
  version: "2.3.1"
});

Npm.depends({
  "uglify-es": "3.2.2"
});

Package.onUse(function (api) {
  api.use('babel-compiler');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
