const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes'); 

const setupAndStartServer = async()=>{

    const app=express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    });

}

setupAndStartServer();
//SSE1RHrE-KgsLlpfjMh4GM5gWc5Zzib7Hc1xodeqGHQ
//VkHsjUn2_6kFDBYGqTTmvcN6LLPPL7WAPoXn21oCtYU
//Z4e6gqzXwjlPx-pLIYa6TJqUDRhBBhBMtGgJTvElUME