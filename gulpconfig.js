var project  = 'davidfreerksen',
    src      = './assets/',
    build    = './assets/',
    bower    = './bower_components/',
    composer = './vendor/';

var ext = {
  images: src + '**/*(*.png|*.jpg|*.jpeg|*.gif)',
  fonts: [
    src + '**/*(*.eot|*.svg|*.ttf|*.woff)',
    bower + '**/*(*.eot|*.svg|*.ttf|*.woff)'
  ],
  javascripts: [
    src + '**/*(*.js|*.coffee)',
    bower + '**/*(*.js|*.coffee)'
  ],
  stylesheets: [
    src + '**/*(*.css|*.scss|*.sass)',
    bower + '**/*(*.css|*.scss|*.sass)'
  ]
}

module.exports = {
  browsersync: {
    files: [
      build + '/**',
      '!' + build + '/**.map'
    ],
    notify: false,
    open: false,
    port: 3000,
    proxy: 'localhost:8080',
    watchOptions: {
      debounceDelay: 2000
    }
  },

  copy: {
    bourbon: {
      src: bower + 'bourbon/app/assets/stylesheets/**/*',
      dest: build + 'css/bourbon'
    },
    jquerymap: {
      src: bower + 'jquery/dist/jquery.min.map',
      dest: build + 'javascripts',
      rename: 'jquery.min.map'
    },
    neat: {
      src: bower + 'neat/app/assets/stylesheets/**/*',
      dest: build + 'css/neat'
    },
    normalize: {
      src: bower + 'normalize-scss/_normalize.scss',
      dest: build + 'css/plugins'
    }
  },

  javascripts: {
    src: [
      bower + 'consolelog/consolelog.min.js',
      bower + 'jquery/dist/jquery.min.js',
      src + 'js/application.js'
    ],
    dest: build + 'javascripts/',
    uglify: {},
    name: 'application.js'
  },

  stylesheets: {
    src: [
      src + 'css/application.scss'
    ],
    dest: build + 'stylesheets/',
    name: 'application.css',
    autoprefixer: {
      browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
    },
    minify: {
      keepSpecialComments: 1,
      roundingPrecision: 3
    },
    libsass: {
      includePaths: [bower],
      precision: 6,
      onError: function(err) {
        return console.log(err);
      }
    }
  },

  fonts: {
    genericons: {
      src: src + 'genericons/*(*.eot|*.svg|*.ttf|*.woff)',
      dest: build + 'genericons/'
    }
  },

  watch: {
    src: {
      copy:        ext.copy,
      images:      ext.images,
      fonts:       ext.fonts,
      javascripts: ext.javascripts,
      stylesheets: ext.stylesheets
    },
    watcher: 'browsersync'
  }
};
