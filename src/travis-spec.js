'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const getCiName = require('.').getCiName
const mockedEnv = require('mocked-env')
const la = require('lazy-ass')

context('Travis', () => {
  describe('forked PR', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          TRAVIS: 'true',
          TRAVIS_PULL_REQUEST: '16',
          TRAVIS_PULL_REQUEST_SLUG: 'bahmutov/is-fork-pr',
          TRAVIS_REPO_SLUG: 'foo/bar'
        },
        { clear: true }
      )
    })

    it('finds fork PR', () => {
      la(isForkPr(), 'should have found forked PR')
    })

    afterEach(() => {
      restore()
    })
  })

  describe('own PR', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          TRAVIS: 'true',
          TRAVIS_PULL_REQUEST: 'false',
          TRAVIS_PULL_REQUEST_SLUG: 'bahmutov/is-fork-pr'
        },
        { clear: true }
      )
    })

    it('does not find fork PR', () => {
      la(!isForkPr(), 'should NOT be fork PR')
    })

    it('knows it is Travis', () => {
      la(getCiName() === 'Travis', 'wrong CI name', getCiName())
    })

    afterEach(() => {
      restore()
    })
  })

  describe('regular build on Travis', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          TRAVIS: 'true'
        },
        { clear: true }
      )
    })

    it('knows it is Travis', () => {
      la(getCiName() === 'Travis', 'wrong CI name', getCiName())
    })

    afterEach(() => {
      restore()
    })
  })
})
