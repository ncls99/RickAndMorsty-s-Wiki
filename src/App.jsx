import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/images/Rick-And-Morty-Logo.png'
import CardResident from './components/CardResident'
import ErrorMessage from './components/ErrorMessage'
import Error from './components/ErrorMessage'
import Filter from './components/Filter'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  const [location, setlocation] = useState()
  const [searchInput, setSearchInput] = useState()
  const [filterInput, setFilterInput] = useState()
  const [hasError, setHasError] = useState()

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setlocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {

    if (e.target.value === '') {
      setFilterInput()
      

    } else {

      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

      const uListId = document.querySelector("#ulistId")
      uListId.style.visibility = "visible";
      axios.get(URL)
        .then(res => setFilterInput(res.data.results))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="App">
      <div className='headSection'>
        <div className='mainTitle'>
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <input className='textBox' id='idLocation' onChange={handleChange} type="text" placeholder='Enter another location' />
          <Filter filterInput={filterInput} setSearchInput={setSearchInput} />
        </form>
      </div>
      <div className='bodySection'>
        {
          hasError ?
            <ErrorMessage />
            :
            <>
              <LocationInfo location={location} />
              <div className='cardsSection'>
                {
                  location?.residents.map(url => (
                    <CardResident
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
        }
      </div>

    </div>
  )
}

export default App
