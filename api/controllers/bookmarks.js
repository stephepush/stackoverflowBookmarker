const { hashesString } = require('../lib/stringHashUtils');

exports.getBookmarks = (req, res, next) => {
    res.status(200).json({bookmark: "aol.com"})
}


exports.postBookmark = (req, res, next) => {
    const title = req.body.title;
    const content =  req.body.content;
    res.status(201).json({
        message: 'Post created successfully'
        //post: {}
    })
    console.log(req)
}

