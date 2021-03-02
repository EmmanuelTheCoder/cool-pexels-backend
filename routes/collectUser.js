
var express = require('express');
var {createClient} = require('pexels');
const client = createClient('563492ad6f91700001000001c1070861452d4bd3aab4618b9ae04274')

var router = express.Router();

const axios = require('axios');



const apiKey = '238b9cd32486ce154b1830a00a1b4d237e267d47f2fd833732a75070e1a76212';
const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=2021-01-15&to=2021-01-29`;


router.get("/", function(req, res, next){
    // axios.get(fixtures)
   
    // .then(response =>{
    //     console.log(response.data.result)

    //     res.send(response.data.result)
    // })
    // .catch(err => console.log(err))
    
    client.photos.curated({per_page: 80, page: 1}).then(photos =>{
        console.log(photos)
        res.send(photos);
    })
})
module.exports = router;
