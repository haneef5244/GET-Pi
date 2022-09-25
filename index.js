const { service } = require('./service')

exports.handler = async (event) => {
    return service(event)
};
