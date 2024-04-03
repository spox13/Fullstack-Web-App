import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'

export const DUMMY_AUTHORS = [
  {
      id: '1',
      name: 'John Doe',
      avatar: Avatar1,
      posts: 1
  },
  {
      id: '2',
      name: 'Jane Doe',
      avatar: Avatar2,
      posts: 5
  },
  {
      id: '3',
      name: 'Some Guy',
      avatar: Avatar3,
      posts: 3
  },
  {
      id: '4',
      name: 'Cool Guy',
      avatar: Avatar4,
      posts: 8
  }
]

const Authors = () => {

  const [authors, setAuthors] = useState(DUMMY_AUTHORS)

  return (
    <section className="authors">
        {authors.length ? <div className="container authors__container">
            {authors.map(({id, name, avatar, posts}) => {
                return <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                    <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className='author__info'>
                    <h4>{name}</h4>
                    <p>{posts} posts</p>
                </div>
            </Link>
            })}
        </div> : <h2 className='center'>No authors found</h2>}
    </section>
  )
}

export default Authors