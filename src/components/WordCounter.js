import React from 'react';
import './WordCounter.css';

class WordCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            words: '',
            wordCount: 0,
            value:null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const valueArray = value.match(/\S+/g)
        let count = 0;
        if (!!valueArray) {
            count = valueArray.length
        }

        this.setState({
            [name]: value,
            wordCount: count,
            value:event.target.value
        });
    }

    render() {
        let count = 0,
        length = this.state.value?this.state.value.length:0;
        return (
            <div>
                <form className='ui massive form' onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label className="Title">
                            <h1>Text</h1>
                        </label>
                        <textarea
                            placeholder="Enter your text "
                            className="Text-area" name="words"
                            type="string" value={this.state.words}
                            onChange={this.handleInputChange} 
                        />
                    </div>
                </form>
                    <a className="ui massive black label"> <label className="Title">Word Count: </label>
                    <span className="Count"> {this.state.wordCount}</span></a>
                    <a class="ui massive black label">
                    <label className='Title' >Char Count: </label>
                    <span className='count'>{length}</span>
                </a>
            </div>
        );
    }
}


export default WordCounter;