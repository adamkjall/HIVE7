module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: false,
        loose: true,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@loadable/babel-plugin',
    'lodash',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          tests: './tests',
          tokens: './tokens'
        }
      }
    ],
    [
      'styled-components',
      {
        displayName: true
      }
    ]
  ],
  env: {
    webpack: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: ['dynamic-import-node']
    },
    production: {
      plugins: [
        [
          'styled-components',
          {
            displayName: false,
            minify: true,
            pure: true
          }
        ],
        'transform-react-remove-prop-types'
      ]
    }
  }
};
