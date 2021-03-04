const express = require('express');
const {createClient} = require('pexels');

const client = createClient('563492ad6f91700001000001c1070861452d4bd3aab4618b9ae04274');

const videoServer = express.Router();

videoServer.get("/", (req, res, next)=>{

    client.videos.popular({per_page: 5, page: 1 }).then( video =>{
        return res.send(video);
    })
})

module.exports = videoServer;