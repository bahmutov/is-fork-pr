'use strict'

/* eslint-env mocha */
const isForkPr = require('.').isForkPr
const getCiName = require('.').getCiName
const mockedEnv = require('mocked-env')
const la = require('lazy-ass')

context('GitHub Actions', () => {
  describe('forked PR', () => {
    let restore

    beforeEach(() => {
      restore = mockedEnv(
        {
          GITHUB_ACTION: 'run',
          GITHUB_ACTIONS: 'true',
          GITHUB_ACTOR: 'bahmutov',
          GITHUB_BASE_REF: 'master',
          GITHUB_EVENT_NAME: 'pull_request',
          GITHUB_EVENT_PATH:
            '/home/runner/work/_temp/_github_workflow/event.json',
          GITHUB_HEAD_REF: 'master',
          GITHUB_REF: 'refs/pull/304/merge',
          GITHUB_REPOSITORY: 'cypress-io/cypress-example-kitchensink',
          GITHUB_SHA: 'e07026c13fe44fbff7aeccaacf6772c57ddcb5c0',
          GITHUB_WORKFLOW: 'CI',
          GITHUB_WORKSPACE:
            '/home/runner/work/cypress-example-kitchensink/cypress-example-kitchensink'
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
          GITHUB_ACTION: 'run',
          GITHUB_ACTIONS: 'true',
          GITHUB_ACTOR: 'bahmutov',
          GITHUB_BASE_REF: '',
          GITHUB_EVENT_NAME: 'push',
          GITHUB_EVENT_PATH:
            '/home/runner/work/_temp/_github_workflow/event.json',
          GITHUB_HEAD_REF: '',
          GITHUB_REF: 'refs/heads/internal-pr',
          GITHUB_REPOSITORY: 'cypress-io/cypress-example-kitchensink',
          GITHUB_SHA: 'b04a3e7e8e83d753bb411a69d21f1d6f69c4ec1b',
          GITHUB_WORKFLOW: 'CI',
          GITHUB_WORKSPACE:
            '/home/runner/work/cypress-example-kitchensink/cypress-example-kitchensink'
        },
        { clear: true }
      )
    })

    it('does not find fork PR', () => {
      la(!isForkPr(), 'should NOT be fork PR')
    })

    it('knows it is GitHub actions', () => {
      la(getCiName() === 'GitHub Actions', 'wrong CI name', getCiName())
    })

    afterEach(() => {
      restore()
    })
  })
})
