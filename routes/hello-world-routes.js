const express = require('express');
const router = express.Router();
const basePath = '/';

router.get(basePath, (req, res) => {
    let response = {
        httpStatus: 200,
        body: {
            hello: 'wolrd'
        }
    }
    res.status(response.httpStatus).json(response);
});

module.exports = router;
