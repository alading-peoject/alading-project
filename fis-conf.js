fis.set('project.ignore', ['libs/**','dist/**','view/common/**', 'node_modules/**', 'fis-conf.js', 'test/**', 'debug/**', 'package.json','README.md']);

fis.set('new date', Date.now());

fis.set('namespace', 'alading');

fis.hook('commonjs');
fis
    .match('/app/view/pages/(*.html)', {
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
    }),

fis.media('dist')

    // 资源压缩
    .match('/app/**.png', {
        optimizer: fis.plugin('png-compressor')
    })

    .match('/app/(script/**.*)', {
        isMod:true,
        optimizer: fis.plugin('uglify-js'),
        release: '${namespace}/$1'
    })
    
    .match('/app/(**.css)', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    })

    // stylus编译
    .match('*.styl', {
        parser: fis.plugin('stylus2'),
        rExt: '.css'
    })