var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/notes', function(req, res, next) {
  res.send('responds with all notes')
});

module.exports = router;
