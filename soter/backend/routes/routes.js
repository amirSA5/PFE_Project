const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
const SoterDataCopy = require('../models/admin_model')



router.post('/admin', controller.post)
router.get('/liste',(request,response)=>{
    
    SoterDataCopy.find()
    .then(data=>{
        response.json(data)
    })
})
router.delete('/liste/:id', controller.delete)
router.put('/liste/:id', controller.update)



module.exports = router