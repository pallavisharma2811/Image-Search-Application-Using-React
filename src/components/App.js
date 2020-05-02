import React from 'react';
import SearchBar from './SearchBar';// .js causes error, it is in the same directory
import unsplash from '../API/unsplash';
import ImageList from './ImageList';

class App extends React.Component{

    state= {images: []};

    onSearchSubmit = async (term) =>{//state obj's property has been passed, term is whatever we have written in the search box like cars
    const response = await unsplash.get('/search/photos', {//kept await keyword to handle what is returned and store it in response
        params: { query: term},//param specifies diff query string param we want to specify
    }); //made a successful request to APi unsplash using axios
     
    this.setState({images: response.data.results});
    }
    

    render(){
        return (//searchbar component has been authorized by me so can be named anything
            <div className='ui container' style= {{marginTop: '10px'}}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
            <ImageList images= {this.state.images}/>
            </div>
        );// images is a prop defined on imagelist comp, all the images we had in state is passed to it
    }
}// ; != in class

    

export default App;