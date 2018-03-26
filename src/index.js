'use strict'

// for now print every var
Object.keys(process.env).forEach(name => {
  console.log('%s:', name, process.env[name])
})

module.exports = true
