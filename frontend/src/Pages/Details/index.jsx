import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Details() {
  const [data, setdata] = useState([])
  const {id}=useParams()
  async function GetProducts() {
    const res= await axios.get("http://localhost:3000/vegetables")
    setdata(res.data)
}
useEffect(() => {
  GetProducts()
}, [])

  return (
    <div>
     { data && <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         {data.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>}
 
    </div>
  )
}

export default Details