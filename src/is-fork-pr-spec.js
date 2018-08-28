'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const la = require('lazy-ass')
const is = require('check-more-types')

describe('is-fork-pr', () => {
  it.skip('print all env vars', () => {
    // for now print every var
    Object.keys(process.env).forEach(name => {
      console.log('%s:', name, process.env[name])
    })
  })

  it('is a function', () => {
    la(is.fn(isForkPr))
  })
})
