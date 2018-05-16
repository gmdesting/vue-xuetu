'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"https://www.easy-mock.com/mock/5a1d4a068e6ddb24964c7156/example"'
})