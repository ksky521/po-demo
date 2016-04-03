po.set('static', 'po-demo')
  .set('namespace', 'demo')
  .set('template', 'template');

fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'static/jslib/mod/test/**'
]);
