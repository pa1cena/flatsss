import React from 'react'
import data from '../components/data.json'
import '../components/cards.css'
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <>
    <div className='text-right'>
      <Link to='/'>
            <button className=" btn btn-danger m-2">Logout</button>
          </Link>
    </div>
    <h1 className='text-center'>Available Flats</h1>
    <div className='container'>
    <div className='row g-3 m-4'>
    {
        data.map((flat)=>{
            return (
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
             <img src={flat.img} alt='image1' height='250px' className=''></img>
             <div className='card-body'>
                <h2 className='card-title'>Rent:{flat.rent}</h2>
                <p className='card-text'>Location:{flat.location}</p>
                <p className='card-text'>Area:{flat.area}</p>
                <p className='card-text'>Near:{flat.closeto}</p>
                <p className='card-text'>For:{flat.forwhom}</p>
             </div>
          </div>
        </div>
            )
        })
    }
    </div>
        </div>
    </>
  )
}

export default Card