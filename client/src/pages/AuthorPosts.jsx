import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const {id} = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
              setPosts(response.data)
          } catch (error) {
              console.log(error)
          }
      }

        fetchPosts()
    }, [])


    return <section className="user__posts">
      {posts.length ? <div className="container posts__container">
          {posts.map(({_id:id, thumbnail, category, title, description, creator, createdAt}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt}/>)}
      </div> : <h2 className='center'>No posts found for this user</h2>}
    </section>
}

export default AuthorPosts