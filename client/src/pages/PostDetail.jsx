import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PostAuthor from '../components/PostAuthor'
import { UserContext } from '../context/userContext'
import DeletePost from './DeletePost'
import DOMPurify from "dompurify";

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null);
  const [error, setError] = useState('')
  const [creatorID, setCreatorID] = useState(null)
  const navigate = useNavigate();

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  useEffect(() => {
    const getPost = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
            setPost(response.data);
            setCreatorID(response.data.creator)
        } catch (error) {
            console.log(error)
        }
    }
    getPost();
}, [])

  return (
    <section className="post-detail">
      {error && <p className='error'>{error}</p>}
      {post && <div className="container post-detail__container">
        <div className="post-detail__header">
        <PostAuthor authorID={creatorID} createdAt={post?.createdAt} />
          {currentUser?.id === post?.creator && <div className="post-detail__buttons">
                <Link to={`/posts/${post?._id}/edit`} className="btn sm primary">Edit</Link>
                <DeletePost postId={id}/>
          </div>}
        </div>
        <h1>{post?.title}</h1>
        <div className="post-detail__thumbnail">
          <img src={`${process.env.REACT_APP_ASSET_URL}/uploads/${post?.thumbnail}`} alt="" />
        </div>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.description)}}/>
        </div>}
    </section>
)
}

export default PostDetail