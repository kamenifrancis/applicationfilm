import React from 'react'

const SearchName = ({setSearchName}) => {
  return (
    <div>
     <input placeholder='searh a movie?' onChange={(e)=>setSearchName(e.target.value)} />
    </div>
  )
}

export default SearchName

