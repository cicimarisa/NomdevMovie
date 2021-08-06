import React from "react"
import "./List.scss"

function List(props) {
    return (
        <li>
            <img src={props.movie.poster_path && `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`} alt="Movie Image" />
            <p> <span className="title">{props.movie.title}</span><br />
                <span className="description">{props.movie.overview}</span>
            </p>
        </li>
    )
}

export default List