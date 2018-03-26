'use strict'

const isForkPrTravis = () => {
  if (!process.env.TRAVIS_PULL_REQUEST) {
    return false
  }
  return process.env.TRAVIS_REPO_SLUG === process.env.TRAVIS_PULL_REQUEST_SLUG
}

const isForkPr = isForkPrTravis

module.exports = isForkPr
