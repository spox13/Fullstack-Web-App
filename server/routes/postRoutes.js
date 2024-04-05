const {Router} = require('express')

const router = Router()

router.get('/', (req, res, next) => {
    res.json("post routes")
})

module.exports = router