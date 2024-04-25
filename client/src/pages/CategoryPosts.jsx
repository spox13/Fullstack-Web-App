import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
    const {category} = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
                setPosts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts();
    }, [category])


    return (
    <section className="category-posts">
        {posts.length ? <div className="container posts__container">
            {
                posts.map(({_id:id, thumbnail, category, title, description, creator, createdAt}) => {
                    return <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt}/>
                })
            }
        </div>  : <h2 className="center">No Posts found for {category}.</h2>}
    </section>
    )
}


export default CategoryPosts