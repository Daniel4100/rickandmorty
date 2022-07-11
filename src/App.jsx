import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import CardCharacter from './components/CardCharacter'
import useLocationApi from './hooks/useLocationApi'
import InputSearch from './components/InputSearch'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  
  const location = useLocationApi(searchLocation)

  return (
    <div className="App">
      <div className='container'>
        <InputSearch  setSearchLocation={setSearchLocation}/>
        <LocationInfo location={location}/>
      </div>
      <div className='containerCards'>
        {location?.residents.map(resident => (
          <CardCharacter 
          resident={resident}
          key={resident}/>
        ))}
      </div>
    </div>
  )
}

export default App
