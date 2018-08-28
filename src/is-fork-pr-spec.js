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

  it('finds fork PR on Circle', () => {
    console.log('type of CIRCLE_PR_NUMBER', typeof process.env.CIRCLE_PR_NUMBER)
    console.log('CIRCLE_PR_NUMBER', process.env.CIRCLE_PR_NUMBER)
    console.log('CIRCLE_PR_USERNAME', process.env.CIRCLE_PR_USERNAME)
    console.log('CIRCLE_PR_REPONAME', process.env.CIRCLE_PR_REPONAME)
    console.log('is fork PR?', isForkPr())
  })
})
