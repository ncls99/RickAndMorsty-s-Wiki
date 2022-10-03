import React from 'react'

const Filter = ({ filterInput, setSearchInput }) => {
    console.log(filterInput)

    const handleClick = id => setSearchInput(id)

    return (
        <ul className='ulFilter' id="ulistId">
            {
                filterInput?.map(location => (
                    <li onClick={(event) => {
                        handleClick(location.id)
                        const uListId = document.querySelector("#ulistId")
                        uListId.style.visibility = "hidden";
                    }}
                        key={location.id} >{location.name}</li>
                ))
            }
        </ul>
    )
}

export default Filter