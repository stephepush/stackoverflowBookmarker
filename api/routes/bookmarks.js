const express = require('express');

const bookmarksController = require('../controllers/bookmarks')

const router = express.Router();


router.get('/bookmarks', bookmarksController.getBookmarks);

router.post('/bookmarks', bookmarksController.postBookmark)

module.exports = router