const bluebird = require('bluebird')
const pgp = require('pg-promise')({promiseLib: bluebird})



console.log(process.env.PASSWORD_DB || 'eh')

const config = pgp({
    user: 'postgres',
    password: 'ADMIN',
    port: 5432,
    host: 'localhost',
    database: 'practicas'
})

module.exports = config