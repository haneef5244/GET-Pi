const generateResponse = (httpStatus, message) => ({
    statusCode: httpStatus,
    body: JSON.stringify(message),
})

module.exports = {
    generateResponse,
}