fis.set('project.ignore', ['libs/**', 'node_modules/**', 'fis-conf.js', 'test/**', 'debug/**', 'dist/**', 'package.json','README.md']);

fis.set('new date', Date.now());

fis.set('namespace', 'alading');

fis.hook('commonjs');
fis
    .match('/app/view/(*.html)', {
        standard: false,
        release: '${namespace}/$1'
    })
    .match('/app/(style/**.*)', {
        standard: false,
        release: '${namespace}/$1'
    })
    .match('/app/(script/**.*)', {
        release: '${namespace}/$1'
    })
    
    .match('/app/(image/**.*)', {
        release: '${namespace}/$1'
    })

    .match('/app/script/{module,page}/(**.js)', {
      isMod: true,
      moduleId: '$1'
    })

    .match('/app/script/jquery.js', {
      isMod: true,
      moduleId: '$1'
    })

    .match('::package', {
        postpackager: [fis.plugin('commonjs', {
            //keyStrFilter: ['.js', 'app/script/'],
        }), fis.plugin('loader')]
    })

    .match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'commonJs',
            useInlineMap: true // 资源映射表内嵌
        })
    });

