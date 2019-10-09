'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const mockedEnv = require('mocked-env')
const la = require('lazy-ass')

context('env variable fallback', () => {
  describe('is set to true', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          IS_FORK_PR: 'true'
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

  describe('is set to 1', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          IS_FORK_PR: '1'
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

  describe('is not set', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv({}, { clear: true })
    })

    it('does not find fork PR', () => {
      la(!isForkPr(), 'should NOT be fork PR')
    })

    afterEach(() => {
      restore()
    })
  })

  describe('is set to 0', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          IS_FORK_PR: '0'
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

  describe('is set to false', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          IS_FORK_PR: 'false'
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
