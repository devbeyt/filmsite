import React, { Component } from 'react'

export default class SearchBar extends Component {

   
handleSumbit = e =>{
    e.preventDefault()
}
 
    render() {
        return (
            <form onSubmit={this.handleSumbit}> 
                <div className='form-row rb-5 mt-5'>
                    <div className='col-12'>
                        <input onChange={this.props.searchMovie}
                         className='form-control' type='text' placeholder='Search movies...' />
                    </div>
                </div>
                
            </form>
        )
    }
}
