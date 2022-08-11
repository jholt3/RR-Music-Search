import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { Fragment } from 'react/cjs/react.production.min'
import { createResource as fetchData } from './helper'
import React from 'react'
import Spinner from './components/Spinner'

function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    const API_URL = 'http//localhost:4000/song/${id}'

    useEffect(() => {
        if (searchTerm) {
            setData(fetchData(searchTerm))
        }
    }, [searchTerm])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)}

        const renderGallery = () => {
            if(data){

                return (
                    <div>
                        {message}
                        <Router>
                            <Routes>
                                <Route path="/" element={
                                    <Fragment>
                                        <Searchbar handleSearch = {handleSearch}/>
                                        {message}
                                        {renderGallery()}
                                        <Gallery data={data} />
                                    </Fragment>
                                } />
                                <Route path="/album/:id" element={<AlbumView />} />
                                <Route path="/artist/:id" element={<ArtistView />} />
                            </Routes>
                        </Router>
                        <Suspense fallback={<Spinner />}> // <Gallery data={data} />
                        </Suspense>
                    </div>
                  )

                            }
            

}
}
export default App
