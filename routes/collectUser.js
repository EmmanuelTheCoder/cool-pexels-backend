
var express = require('express');
var {createClient} = require('pexels');
const client = createClient('563492ad6f91700001000001c1070861452d4bd3aab4618b9ae04274')

var router = express.Router();

router.get("/", function(req, res, next){
    
    client.photos.curated({per_page: 80, page: 1}).then(photos =>{
        console.log(photos)
        res.send(photos);
    })
})
module.exports = router;
