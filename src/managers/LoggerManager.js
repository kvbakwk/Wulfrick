const { editMsg, deleteMsg } = require('../utils/logger/logger')

const LoggerManager = () => {
    console.log('\tLogger -> success')
    return { editMsg, deleteMsg }
}

module.exports = LoggerManager