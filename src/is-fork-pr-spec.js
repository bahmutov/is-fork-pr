'use strict'

/* eslint-env mocha */
const isForkPr = require('.')

describe('is-fork-pr', () => {
  it('print all env vars', () => {
    // for now print every var
    Object.keys(process.env).forEach(name => {
      console.log('%s:', name, process.env[name])
    })
  })

  it('finds if fork PR', () => {
    console.log('is fork PR?', isForkPr())
  })
})
