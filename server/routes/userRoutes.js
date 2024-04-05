const {Router} = require('express')

const router = Router()

router.get('/', (req, res, next) => {
    res.json("user routes")
})

module.exports = router