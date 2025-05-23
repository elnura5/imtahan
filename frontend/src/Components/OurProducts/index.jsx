import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function OurProducts() {
    const [products, setproducts] = useState([])
    async function GetProducts() {
        const res= await axios.get("http://localhost:3000/vegetables")
        setproducts(res.data)
    }
    useEffect(() => {
      GetProducts()
    }, [])
    
  return (
    <section className='ourproduct'>
    <div className='text'><p style={{color:"green"}}>Featured Products</p>
    <h2 style={{fontSize:"3rem"}}>Our Products</h2>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p></div>
    <div className='cards'>
     {products.map((x)=>(
        <div className='card'>
            <img src={x.image} alt="" style={{height:"15rem"}} />
            <h3>{x.name}</h3>
            <p style={{color:"green"}}>${x.price}</p>
           <Link to={`detail/${x._id}`}> <button>detail</button></Link>
        </div>
     ))}

    </div></section>
  )
}

export default OurProducts