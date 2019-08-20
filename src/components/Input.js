import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {guessWord} from '../actions'; 

export class UnconnectedInput extends Component {
  constructor(props){
    super(props); 
    this.inputBox = React.createRef(); 
    // this.submitGuessedWord = this.submitGuessedWord.bind(this)

  }

  submitGuessedWord = (event) => {
    // prevent default 
    event.preventDefault(); 
    const guessedWord = this.inputBox.current.value; 
    if(guessedWord && guessedWord.length > 0){
      this.props.guessWord(guessedWord); 
    }
  }

  render() {
    const contents = this.props.success ||this.props.gaveUp ? null : (
      <form className="form-inline">
        <input id="word-guess" type="text" placeholder="enter guess" data-test="input-box" ref={this.inputBox} className="mb-2 mx-sm-3"/>
        <button data-test="submit-button" type="submit" className="btn btn-primary mb-2" onClick={this.submitGuessedWord}>submit</button>
      </form>
    )

    
    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({success}) => {
  return {success}; 
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput); 