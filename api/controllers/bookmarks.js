const { hashesString } = require('../lib/stringHashUtils');

exports.getBookmarks = (req, res, next) => {
    res.status(200).json({bookmark: "aol.com"})
}


exports.postBookmark = (req, res, next) => {
    const url = req.body.title;
    let urlHash = hashesString(url);
    //console.log(urlHash)
    res.status(201).json({
        message: 'Post created successfully'
        //post: {}
    })
    //console.log(req)
}

