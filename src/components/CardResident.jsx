import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({ url }) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])


    return (
        <div className='card'>
            <header>
                <div className='imgBox'>
                    <img src={resident?.image} alt="" />
                </div>
                <div className='statusCard'>
                    <div className='circle'>
                        <div className='circleStatus'></div>
                        <span>{resident?.status}</span>
                    </div>
                </div>
            </header>
            <div className='cardInfoBox'>
                <h3>{resident?.name}</h3>
                <ul>
                    <li><span>Species: </span>{resident?.species}</li>
                    <li><span>Origin: </span>{resident?.origin.name}</li>
                    <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardResident