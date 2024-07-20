import React from 'react'
import Card from 'react-bootstrap/Card';
import Mern from '../assets/Mern.png'
import Mean from '../assets/Mean.jpg'
import Java from '../assets/Java.png'
import Cyber from '../assets/Cyber.jpg'
import DataScience from '../assets/Data-Science.png'

function All() {
  return <>
    <div className="container mt-5 mb-3 d-flex gap-3 flex-wrap">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mern} />
            <Card.Body>
                <Card.Title>Mern Stack</Card.Title>
                <Card.Text>
                    Mern Stack is a combination of MongoDB, Express JS, React JS, Node JS.
                    You will learn react library in this course.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mean} />
            <Card.Body>
                <Card.Title>Mean Stack</Card.Title>
                <Card.Text>
                    Mern Stack is a combination of MongoDB, Express JS, Angular JS, Node JS.
                    You will learn react library in this course.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Java} />
            <Card.Body>
                <Card.Title>Java Stack</Card.Title>
                <Card.Text>
                    Java Stack is a combination of both front-end and back-end. For front-end we use HTMl, CSS, JavaScript and multiple Javascript frameworks and also for back-end we use java proggramming language and java frameworks like spring and springboot.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cyber} />
            <Card.Body>
                <Card.Title>Cyber Security</Card.Title>
                <Card.Text>
                    Cyber security is a way to protect the organizations from cyber attack and finding the vulnerability in the organization network and fix them.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={DataScience} />
            <Card.Body>
                <Card.Title>Data Science</Card.Title>
                <Card.Text>
                Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
  </>
}

export default All