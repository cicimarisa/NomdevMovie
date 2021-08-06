import React, { useState } from "react"
import "./Search.scss"
import search from "./../../img/search.svg"
import List from "./../MoviesList/List"

function Search() {
    /* let [searchInputStyle, updateSearchInputStyle] = useState({})
    function searchBTn() {
        updateSearchInputStyle((prevState) => {
            return prevState = {
                width: '80%',
                paddingLeft: '60px',
                cursor: 'text'
            }
        })
    } */

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        //so that its not reloading the page
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en&api_key=4a5c19ec2e7c7f5afb9799fa30045760`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <section className="search-section">
                <div className="container">
                    <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
                    <div className="search-contain">
                        <form className="form" onSubmit={searchMovies}>
                            <button type="submit"><img src={search} alt="search button" id="search-btn" /></button>
                            <input name="query" type="text" placeholder="Search for the title i.e. Jurassic Park" value={query} required onChange={(e) => setQuery(e.target.value)} />
                            {/*  <p id="tip">Hit Enter to Search</p> */}
                        </form>
                    </div>
                    <p>
                        Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.
                    </p>
                </div>
            </section>
            <section className="list-section">
                <div className="container">
                    <ul>
                        {movies.map(movie => <List key={movie.id} movie={movie} />)}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Search