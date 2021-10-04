import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {

    const { img, courseName, author, price } = props.course
    return (
        <div className="course-part">
            <Col xs={6} className="g-4 mx-auto card">
                <img className="w-100" src={img} alt="" />
                <h2>{courseName}</h2>
                <h3>Author:{author}</h3>
                <h4>Price:{price}$</h4>
                <Link>
                    <button className="btn-regular">Enrole Now</button>
                </Link>

            </Col>
        </div>
    );
};

export default Course;