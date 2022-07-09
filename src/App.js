import React, { Component } from 'react'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

export default class App extends Component {


   state = {
      movies:[],
      searchQuery: ''
   }

   // api movies fecth edilir......
   componentDidMount(){
      fetch('http://localhost:3000/movies')
      .then(response=> response.json())
      .then(data => this.setState({movies: data}))
   }

// delet movi methodu
    removeMovie = (movie)=>{

     const newMovieList = this.state.movies.filter(
        m=>m.id !==movie.id
     );
     this.setState({
        movies: newMovieList
     })
         }

         // search input methodu
         searchMovie = (e)=>{
            
            this.setState({
               // state update edildi
               searchQuery: e.target.value
               // 
            })
         }

   render() {

      // filmler burada filter edilir.......
   let filterMoives = this.state.movies.filter(
      (movie)=>{
         return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
      )
      return (
         <div className='container'>
            <div className='row'>
               <div className='col-lg-12'>
                  {/* search input */}
                  <SearchBar
                  searchMovie={this.searchMovie} />
               </div>
            </div>
            {/* Movie list */}
            <MovieList
            removeMovie={this.removeMovie}
            // filterden sonra burasi deyisdi...this.state.movies evezine filterMoives gonderildi
            movies={filterMoives} />
         </div>
      )
   }
}
