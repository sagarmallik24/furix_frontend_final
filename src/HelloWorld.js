import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HelloWorld = () => {

    const [students, setStudents] = useState([])

    const fetchStudents = async () => {
        const result = await axios.get('http://localhost:8000/get/');

        console.log(result.data)
        setStudents(result.data)
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }

    return (
        <div>

            <div className="main-students-show">
            {
                students.map((student, index) => (
                    <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

                    <Card.Img variant="top" src={student.product_img} />

                    <Card.Body>

                        <Card.Title>{student.product_name}</Card.Title>
                        <Card.Text> {student.category} </Card.Text>
                        <Card.Text> {student.full_desc} </Card.Text>
                        <Card.Text> {student.short_desc} </Card.Text>
                        
                        {/*<Link className="btn btn-primary mr-2" to={`/${student.id}`}>Full Detail</Link>*/}

                    </Card.Body>
                    </Card>
                ))

            }
            </div>
           
            
        </div>
    );
};

export default HelloWorld;