const crypto = require('crypto');

module.exports = hashesString = (string) => {
    const hash = createHash('sha1')
    //hash.update(string);
    // console.log(hash.copy().digest('hex'));
    console.log(hash.update(string).digest('hex'));
    //return hash.update(string).digest('hex');
} 