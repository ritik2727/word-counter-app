import React from 'react';
import WordCounter from './WordCounter';


class App extends React.Component{
    render(){
        return(
            <div className='ui container' >
                <div className="ui inverted segment">
                <h3  className="ui blue inverted header" >
                Word Counter App
                </h3>
                </div>
                <WordCounter/>
            </div>
        );
    }
}


export default App;