import React from 'react'
import CyberImg from '../assets/Cyber.jpg'
import Card from 'react-bootstrap/Card';

function Cyber() {
  return <>
    <div className="container mt-5 mb-3 d-flex gap-3 flex-wrap">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CyberImg} />
            <Card.Body>
                <Card.Title>Cyber Security</Card.Title>
                <Card.Text>
                    Cyber security is a way to protect the organizations from cyber attack and finding the vulnerability in the organization network and fix them.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  </>
}

export default Cyber