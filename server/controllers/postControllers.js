
// create da post
// api/posts
const createPost = async (req, res, next) => {
    res.json("create da post")
}

// get all posts
// api/posts
const getPosts = async (req, res, next) => {
    res.json("get all posts")
}

// get just one post
// api/posts/:id
const getPost = async (req, res, next) => {
    res.json("get just one post")
}

// posts by category
// api/posts/categories/:category
const getCatPosts = async (req, res, next) => {
    res.json("posts by category")
}

// posts of the author
// api/posts/users/:id
const getUserPosts = async (req, res, next) => {
    res.json("user posts")
}

// editing post
// api/posts/:id
const editPost = async (req, res, next) => {
    res.json("edit post")
}

// delete the post
// api/posts/:id
const deletePost = async (req, res, next) => {
    res.json("delete post")
}

module.exports = {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, deletePost}

