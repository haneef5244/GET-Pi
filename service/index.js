const knex = require('../connection')
const { PI_TABLE, SCHEMA } = require('../constant')
const { generateResponse } = require('../helper')

exports.service = async () => {
    try {
        const result = await getCurrentPi();
        if (result.length == 0) {
            return generateResponse(204, 'No PI value was calculated and stored')
        } else {
            return generateResponse(200, { pi_value: result[0].payload.value })
        }
    } catch (e) {
        console.error(e)
        return generateResponse(500, e.message)
    }
}

const getCurrentPi = () => {
    return knex.select()
        .where('is_deleted', false)
        .from(`${SCHEMA}.${PI_TABLE}`)
}