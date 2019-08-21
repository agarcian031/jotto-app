import React, {Component}from 'react';
import {connect} from 'react-redux'; 
import './App.css';
import GuessedWords from './components/GuessedWords'; 
import Congrats from './components/Congrats'; 
import Input from './components/Input'; 
import {getSecretWord} from './actions'

export class UnconnectedApp extends Component  {
  componentDidMount() {
    // get the secret word 
    this.props.getSecretWord(); 


  }
  render() {
    return (
      <div className="container text-center mt-5">
          <div className=" bg-light card card-body mb-4 p-4">
        <h1 className="display-4 text-center">Jotto</h1>
        <div>This secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {success, guessedWords, secretWord} = state; 
  return {success, guessedWords, secretWord}; 

}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
