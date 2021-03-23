var Express = require('express');
var { createClient} = require('pexels')

var router = Express.Router();
const client = createClient('563492ad6f91700001000001c1070861452d4bd3aab4618b9ae04274');



router.use(Express.json());
router.use(Express.urlencoded({extended: false}))


router.post("/mediaquery", (req, res, next) =>{
    
    console.log("from the client", req.body);
    console.log("just getting the number", req.body.number)
    
    if(req.body.name === "photo"){

        client.photos.curated({per_page: 80, page: req.body.number}).then(photo =>{
            res.send(photo);
        })
    }else{
        client.videos.popular({per_page: 80, page: req.body.number}).then(video =>{
            res.send(video);
        })
    }

    //res.send("there is nothing to find here");
})


module.exports = router;