import React, { useState } from 'react'
import { DUMMY_POSTS } from '../components/Posts'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
            {posts.length ? <div className="container posts__container">
                {
                  posts.map(({id, thumbnail, category, title, desc, creator, createdAt}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={creator} createdAt={createdAt}/>)
                }
            </div> : <h2 className='center'>No Posts Found.</h2>}
        </section>
  )
}

export default AuthorPosts