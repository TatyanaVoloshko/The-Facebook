const feed = require('../model/Feed')

const getHomePage = (req, res) => {
  feed
    .find()
    .sort({ created_at: -1 })
    .then((posts) => res.render("index", { posts, err: "" }))
    .catch((err) => console.log(err))
};

const postNew = (req, res) => {
  const newMessage = new feed(req.body)
   newMessage.save()
    .then(() => res.redirect("/feed"))
    .catch((err) => res.render('index', { err: err.errors, posts: ""}))

};

const getfullMessage = (req, res) => {
  feed
    .findById(req.params.id)
    .then((result) => res.render("fullMessage", {post: result}))
    .catch((err) => console.log(err));
}

const deletePost = (req, res) => {
  feed.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/feed'))
  .catch(err => console.log(err))
}

const getUpdatePost = (req, res) => {
  feed
    .findById(req.params.id)
    .then((result) => res.render("edit", { post: result }))
    .catch((err) => console.log(err));
}

const editPost = (req, res) => {
  feed
    .findByIdAndUpdate(req.params.id, req.body)
    .then((feedId) => res.redirect(`/feed/fullMessage/${feedId._id}`))
    .catch(err => console.log(err))
  
}

module.exports = {
  getHomePage,
  postNew,
  getfullMessage,
  deletePost,
  getUpdatePost,
  editPost,
};