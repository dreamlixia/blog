const path = require('path');

module.exports = (options = {}) => ({
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ]
})