const { createHash } = require('crypto');

function hashesString(string) {
    const hash = createHash('sha1')
    //hash.update(string);
    // console.log(hash.copy().digest('hex'));
    console.log(hash.update(string).digest('hex'));
    //return hash.update(string).digest('hex');
} 

module.exports.hashesString = hashesString 