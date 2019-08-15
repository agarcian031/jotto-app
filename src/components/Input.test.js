import React from 'react'; 
import {shallow} from 'enzyme'; 
import {findByTestAttr, storeFactory} from '../../test/testUtils'; 
import Input from './Input'; 

// we have to connect the redux store inside of our test setup
const setup = (initialState={}) => {
  const store = storeFactory(initialState); 
  const wrapper = shallow(<Input store={store}/>).dive().dive(); 
}


describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    }); 
    test('renders the input box', () => {

    }); 
    test('renders submit button', () => {

    }); 

  }); 
  describe('word has been guessed', () => {
    test('renders component without error', () => {

    }); 
    test(' does not render the input box', () => {

    }); 
    test(' does not render submit button', () => {

    }); 

  })

}); 

describe('update state', () => {

}); 