import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css'

const Blog = (props) => {
    const { language, description } = props.blog

    return (
        <div>
            <Col xs={8} className="blog">
                <h1>{language}</h1>
                <p>{description}</p>
            </Col>
        </div>
    );
};

export default Blog;