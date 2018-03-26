'use strict'

/**
 * Returns true if the Travis CI is building a pull request from
 * a remote repository fork. This means the environment variables
 * are NOT set.
 */
const isForkPrTravis = () => {
  // for pull requests, Travis sets a number. Otherwise it has value "false"
  if (process.env.TRAVIS_PULL_REQUEST === 'false') {
    return false
  }
  return process.env.TRAVIS_REPO_SLUG !== process.env.TRAVIS_PULL_REQUEST_SLUG
}

const isForkPr = isForkPrTravis

module.exports = isForkPr
