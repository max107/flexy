const path = require('path');

module.exports = (url, prev, done) => {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }

    return { file: url };
};
