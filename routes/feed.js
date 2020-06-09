const express = require('express');
const feedController = require('../controller/feed');
const router = express.Router();

router.get('/posts', (req, res) => {
    // feedController.getPosts
    res.send({
        id: 'feed',
        pass: 'feed'
    })
});

module.exports = router;