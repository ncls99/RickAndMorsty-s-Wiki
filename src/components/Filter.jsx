import React from 'react'

const Filter = ({filterInput, setSearchInput}) => {
    console.log(filterInput)

    const handleClick = id => setSearchInput(id)

  return (
        <ul className='ulFilter'>
            {
                filterInput?.map(location => (
                    <li onClick={() => handleClick(location.id)} key={location.id} >{location.name}</li>
                ))
            }
        </ul>
  )
}

export default Filter