import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="title">Learn To Easy Way Any Language</h1>
            <Row xs={1} md={2}>
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Home;