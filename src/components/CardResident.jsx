import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({ url }) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])
        let colorStatus = "Gray"
        if(resident?.status === "Dead" ){
            colorStatus = "Red"
        }else if(resident?.status === "Alive") {
            colorStatus = "Green"
        }

    return (
        <div className='card'>
            <header>
                <div className='imgBox'>
                    <img src={resident?.image} alt="" />
                </div>
                <div className='statusCard'>
                    <div className='circle'>
                        <div className='circleStatus' style={{backgroundColor: colorStatus}}></div>
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