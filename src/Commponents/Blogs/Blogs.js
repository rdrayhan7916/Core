import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('./blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs'>
            <Row xs={3} className="mx-auto p-5 ">
                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }
            </Row>
        </div>
    );
};

export default Blogs;