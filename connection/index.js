'use strict'

const config = require('../config')
const createKnex = require('knex')

console.log(`CONFIG = ${JSON.stringify(config)}`)

const knex = createKnex({
    client: config.db.client,
    connection: {
        host: config.db.host,
        database: config.db.database,
        user: config.db.user,
        password: config.db.password
    },
})

module.exports = knex