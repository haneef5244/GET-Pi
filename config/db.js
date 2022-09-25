'use strict'

require('dotenv').config()

console.log(`process.env.DB_CLIENT = ${process.env.DB_CLIENT }`)

module.exports = {
    client: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}