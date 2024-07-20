import React from 'react'
import DataScienceIMG from '../assets/Data-Science.png'
import Card from 'react-bootstrap/Card';

function DataScience() {
  return <>
    <div className="container mt-5 mb-3 d-flex gap-3 flex-wrap">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={DataScienceIMG} />
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

export default DataScience