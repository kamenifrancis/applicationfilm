import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const MovieCards = ({Movie}) => {
  console.log('Movie',Movie)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {Movie.photo} />
      <Card.Body>
        <Card.Title>{Movie.Title}</Card.Title>
        <Card.Text>
         {Movie.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCards
