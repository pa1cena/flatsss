
// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './candidate.css';
import Footer from './footer';

const Candidate=()=>{
  let y;
   const [flag,setFlag]=useState(y);
   const change=(curUse,voters)=>
   { 
    console.log(voters)
    const temp=curUse;
    temp.t=temp.t+1;
    if(check.value==1){
     setFlag(false)
    }
       fetch(`/election/${temp._id}`,{
       method:'PUT',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify(temp)
     })
     fetch(`/register/${temp._id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(temp)
    })
   }
   const[users,setUsers]=useState([]);
   const getUsers= async ()=>
   {
      const resp=await fetch('/election');
      setUsers(await resp.json());
   }
   const[voters,setvoters]=useState([]);
   const vote= async ()=>
   {
      const resp=await fetch('/register');
      setvoters(await resp.json());
   }
   useEffect(()=>
   {
       getUsers();
       vote();

   },[]);
  return (
    <div className='App'>
      <h1 className='text-center p-4'>List of Candidates</h1>
      {
      <div className='row'>
        {
        users.map((curUse)=>
        {
          return(
                 <div className='col-10 col-md-4 col-lg-3 card1'>
                    <div className='row'>
                          <div className='col-4'>
                              <img className='image' src={curUse.image}/>
                          </div>
                          <div className='col-8'>
                                <h4 className='p-2'>{curUse.partyname}</h4>
                                <p className='pr-3'>{curUse.name}</p>
                                {/* <div className='row'>
                                     <div className='col-4'>
                                       <a>Artices</a>
                                       <p>38</p> 
                                     </div>
                                     <div className='col-4'>
                                       <a>Artices</a>
                                       <p>38</p> 
                                     </div>
                                </div> */}
                                <div className={flag?"hi":"hidden"}>
                                <button className='btn btn-success' onClick={()=>change(curUse,voters)}>VOTE</button>
                                </div>
                          </div>
                    </div>
               </div>
          )
          })
        }
        </div>
         } 
         <div className='footer'>
         </div>
    </div>
  );
}
export default Candidate;