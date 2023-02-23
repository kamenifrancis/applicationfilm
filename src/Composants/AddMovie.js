import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Add = ({add}) => { 
    const[name,setName]= useState ('')
    const[date,setDate]= useState ('2012')
    const[description,setDescription]= useState ('')
    const[photo,setPhoto]= useState ('')
    const[rate,setRate]= useState ('3') 

    const handleAdd = () =>{
        add(
            { id:uuidv4 (),
                name:name,
                description:description,
                rate:rate,
                date:date,
                photo:photo,


            }
        )
    }
  return (
    <div>
      <input placeholder='titre du film' value={name} onChange = {(e)=>setName (e.target.value)}  />
      <input placeholder='rate du film'value={rate} onChange = {(e)=> setRate(e.target.value)} />
      <input placeholder='description du film'value={description} onChange = {(e)=>setDescription (e.target.value)} />
      <input placeholder='date du film'value={date} onChange = {(e)=>setDate (e.target.value)} />
      <input placeholder='image du film'value={photo} onChange = {(e)=> setPhoto(e.target.value)} />
      <button onClick = {()=> handleAdd ()} >add movie </button>
    </div>
  )
}

export default Add

