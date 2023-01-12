import { useEffect, useState } from 'react'
import './App.css';
import Gallery from './components/gallery';
import SearchBar from './components/searchbar' 

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [message, setMessage] = useState("Search for Music!")
  
  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(()=>{
    if (search) {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
        setMessage('')
      } else {
        setMessage('Artist not found!')
      }
      console.log(resData)
    }
    fetchData()
  }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }
  
  
  return (
    <div className= 'App'>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data ={data} />
    </div>
  );
}

export default App;
