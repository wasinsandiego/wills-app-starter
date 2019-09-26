// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: { joinTo: 'app.css' }
}

// ignore specs and stories
exports.conventions = {
  ignored: path => (
    /(^.*.\.stories\.js$)/.test(path) ||
    /(^.*.\.spec\.js$)/.test(path)
  )
}

exports.npm = {
  compilers: ['babel-brunch'],
  aliases: {
    'redux-saga/effects': 'redux-saga/lib/effects'
  },
  styles: {
    'react-select': ['dist/react-select.css'],
    'react-datetime': ['css/react-datetime.css']
  }
}

exports.plugins = {
  uglify: {
    compress: {
      unused: true,
      dead_code: true
    }
  },
  babel: {
    presets: [
      'env',
      'react'
    ],
    plugins: [
      'inline-dotenv',
      'transform-object-rest-spread',
      'transform-export-extensions',
      ['emotion', { 'sourceMap': true, 'autoLabel': true }]
    ]
  }
}

exports.hot = false
