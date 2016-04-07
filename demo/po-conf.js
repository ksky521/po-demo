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
po.match('/mods/header/header.js', {
  packTo: '${static}/pkg/aio.js',
  packOrder: -1
}).match('/mods/header/header.ejs', {
  packTo: '${static}/pkg/aio.js',
  packOrder: -2
})
