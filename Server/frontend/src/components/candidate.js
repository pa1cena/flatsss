
// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './candidate.css';
import Footer from './footer';

const Candidate=()=>{
  let y;
  let x=JSON.parse(localStorage.getItem('test'))
  if(x.value==1 || sessionStorage.getItem('x.email')===1){
    y=false
  }
  else{
    y=true
  }
   const [flag,setFlag]=useState(y);
   const [a,seta]=useState([]);
   const change=(curUse)=>
   { const temp=curUse;
    let check=JSON.parse(localStorage.getItem('test'))
    let tset={
      email:check.email,
      value:check.value=1
    }
    seta([ ...a,check.email])
    console.log(a)
    temp.t=temp.t+1;
    if(check.value==1){
     setFlag(false)
    sessionStorage.setItem('array',JSON.stringify(a))
     localStorage.setItem('test',JSON.stringify(tset))
    }
       fetch(`/election/${temp._id}`,{
       method:'PUT',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify(temp)
     })
     console.log(temp.image);
   }
   const[users,setUsers]=useState([]);
   const getUsers= async ()=>
   {
      const resp=await fetch('/election');
      setUsers(await resp.json());
   }
   useEffect(()=>
   {
       getUsers();
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
                                <button className='btn btn-success' onClick={()=>change(curUse)}>VOTE</button>
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