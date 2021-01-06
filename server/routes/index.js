var express = require('express');
var router = express.Router();
const index_controller = require('./../controllers/index_controller')
/* GET home page. */

router.get('/',index_controller.index);
router.get('/api/:name',(req,res)=>{
    res.send("Hello."+"I Love " + req.params.name)
})
module.exports = router;
