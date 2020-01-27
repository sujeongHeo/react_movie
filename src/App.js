import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
  // Render : componentWillMOunt() -> render() => componentDidMount()
  // Update componentWillReceiveRrops() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()
  
  state ={
    greeting: 'Hello!',
    
  }
  

  componentWillMount(){
    // setTimeout(() => {
    //   this.setState({
    //     greeting : 'Hello again!'
    //   })
    // }, 5000)
    // console.log('will mount')
  };

  componentDidMount(){
   this._getMoives();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      
      console.log(movie)
      return <Movie
       title={movie.title_english} 
       poster={movie.medium_cover_image} 
       key={movie.id}
       genres={movie.genres}
       synopsis={movie.synopsis} />
    })
    return movies
    
  }

   _getMoives = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    const { movies } = this.state;

    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies(): 'Loading'}
      </div>
    );
      }

}

export default App;


///state 는 setState  
/// render 