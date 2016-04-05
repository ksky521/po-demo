po.set('static', 'static/demo')
  .set('template', 'template')
  .set('namespace', 'demo');

fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'static/jslib/mod/test/**'
]);
