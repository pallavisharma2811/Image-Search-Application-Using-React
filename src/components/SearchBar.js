import React from 'react';

class SearchBar extends React.Component{
    state={term: ' '};

    onFormSubmit= event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);//when using props inside class component we use this.props
    };
    
   /* onInputChange(event){// event js object that contain a bunch of event occured & name of the handler/callback(onInC) doesnt make diff
        console.log(event.target.value //property of event obj);
    }*/
    render(){
        return (//text can be under ' ' or " " & input is not dependent on form tag usage, onChange is a prop called on input 
        <div className="ui segment">
            <form onSubmit= {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type = 'text' 
                        vlaue = {this.state.term}
                        onChange={(e)=> this.setState({term: e.target.value })}></input>
                    </div>
            </form>
        </div>
            
            
    );
    }
        
}
export default SearchBar;
