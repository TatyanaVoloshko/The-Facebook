const express = require('express')
const routes = express.Router()
const feedFun = require('../controller/messageController')

routes.get('/feed', feedFun.getHomePage)
routes.post("/feed", feedFun.postNew);

routes.get("/feed/fullMessage/:id", feedFun.getfullMessage);

routes.post("/delete-post/:id", feedFun.deletePost);

routes.get("/feed/update-post/:id", feedFun.getUpdatePost);
routes.post("/feed/updatePost/:id", feedFun.editPost);


module.exports = routes