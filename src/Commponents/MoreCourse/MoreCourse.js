import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';

import OtherCourse from '../OtherCourse/OtherCourse';

const MoreCourse = () => {
    const [moreCourse, setMoreCourse] = useState([])
    useEffect(() => {
        fetch('./moreCourse.JSON')
            .then(res => res.json())
            .then(data => setMoreCourse(data))
    }, [])
    return (
        <div>
            <h1>More</h1>
            <Row xs={1} md={2}>
                {
                    moreCourse.map(course => <OtherCourse course={course}></OtherCourse>)
                }
            </Row>
        </div>
    );
};

export default MoreCourse;