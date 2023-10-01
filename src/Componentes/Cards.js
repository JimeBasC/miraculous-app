import React from 'react'
import Card from './Card';
import image1 from "../assets/adrien.jpg"
import image2 from "../assets/plaga.jpg"
import image3 from "../assets/tikki.png"

const Cards = [
 {
  id: 1,
  title: 'Fast Adrien',
  image: image1,
  instructor: "Jimena Basilio Cedeño"
 },
 {
  id: 2,
  title: 'Fast Plaga',
  image: image2,
  instructor: "Valeria Basilio Cedeño"
 },
 {
  id: 3,
  title: 'Fast Tikki',
  image: image3,
  instructor: "Adriana Basilio Cedeño"

 }
]

export default function cards() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          Cards.map(c => (
            <div className='col-md-4' key={Cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
              </div>
          ))
        }
      </div>
      </div>
  )
}
