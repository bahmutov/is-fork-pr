'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const mockedEnv = require('mocked-env')
const la = require('lazy-ass')

describe('Circle forked PR', () => {
  let restore

  beforeEach(() => {
    restore = mockedEnv(
      {
        CIRCLE_PR_NUMBER: '1',
        CIRCLE_PR_REPONAME: 'is-fork-pr',
        CIRCLE_PR_USERNAME: 'cypress-io',
        CIRCLE_PULL_REQUEST: 'https://github.com/bahmutov/is-fork-pr/pull/1',
        CIRCLE_PULL_REQUESTS: 'https://github.com/bahmutov/is-fork-pr/pull/1'
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

describe('Circle own PR', () => {
  let restore

  beforeEach(() => {
    restore = mockedEnv(
      {
        CIRCLE_PULL_REQUEST: 'https://github.com/bahmutov/is-fork-pr/pull/19',
        CIRCLE_PULL_REQUESTS: 'https://github.com/bahmutov/is-fork-pr/pull/19'
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
