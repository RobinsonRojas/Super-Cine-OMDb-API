import React from 'react'

const Card = ({ movie }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100%" />
                <div className="card-body">
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>

    )
}

export default Card