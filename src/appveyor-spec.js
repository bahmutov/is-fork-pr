'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const mockedEnv = require('mocked-env')
const la = require('lazy-ass')

describe('Appveyor', () => {
  context('forked PR', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          APPVEYOR: 'True',
          APPVEYOR_REPO_NAME: 'bahmutov/is-fork-pr',
          APPVEYOR_PULL_REQUEST_HEAD_REPO_NAME: 'external/is-fork-pr'
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

  context('own PR', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          APPVEYOR: 'True',
          APPVEYOR_REPO_NAME: 'bahmutov/is-fork-pr',
          APPVEYOR_PULL_REQUEST_HEAD_REPO_NAME: 'bahmutov/is-fork-pr'
        },
        { clear: true }
      )
    })

    it('does not find fork PR', () => {
      la(!isForkPr(), 'should NOT be fork PR')
    })

    afterEach(() => {
      restore()
    })
  })
})
