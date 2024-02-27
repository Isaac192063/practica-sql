const {Router} = require('express')
const model = require('../models/model')

const router = Router()


router.get('/', async (req,res)=>{

    const users = await model.selectAll()

    res.render('index.ejs', {'data': users})
})

module.exports = router