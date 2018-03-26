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
    console.log('TRAVIS_PULL_REQUEST', process.env.TRAVIS_PULL_REQUEST)
    console.log(
      'typeof TRAVIS_PULL_REQUEST',
      typeof process.env.TRAVIS_PULL_REQUEST
    )
    if (process.env.TRAVIS_PULL_REQUEST) {
      console.log('TRAVIS_PULL_REQUEST checked')
    }
    console.log('TRAVIS_REPO_SLUG', process.env.TRAVIS_REPO_SLUG)
    console.log(
      'TRAVIS_PULL_REQUEST_SLUG',
      process.env.TRAVIS_PULL_REQUEST_SLUG
    )
    console.log('is fork PR?', isForkPr())
  })
})
