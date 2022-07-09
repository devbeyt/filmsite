import React from 'react'

function MovieList(props) {


  
    return (
        <div className='row'>
        {
            props.movies.map(movie => (
                <div className='col-lg-3 p-3 shadow p-3' key={movie.id}>
                    <div className='card mb-4 '>
                        <img src={movie.imageURL}
                            className='card-img-top ' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>{movie.name}</h5>
                        <p className='card-text'>{movie.overview}</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <button className='btn btn-md btn-outline-danger' 
                        onClick={()=>props.removeMovie(movie)}>delete</button>
                        <h5 className='badge bg-primary p-2'>{movie.rating}</h5>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default MovieList
