import React from 'react'

const LocationInfo = ({ location }) => {

  return (
    <div className='infoBox'>
      <h2 className='locationName'>{location?.name}</h2>
      <div className='locationInfoBox'>
        <ul className='locationInfoUl'>
          <li><span>Type: </span>{location?.type}</li>
          <li><span>Dimension: </span>{location?.dimension}</li>
          <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
      </div>
    </div>
  )
}

export default LocationInfo