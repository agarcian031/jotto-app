import React from 'react'; 
import Enzyme, {shallow} from 'enzyme'; 
import EnzymeAdapter from 'enzyme-adapter-react-16'; 
import Congrats from './Congrats'; 
import {findByTestAttr, checkProps} from '../../test/testUtils'; 

Enzyme.configure({adapter: new EnzymeAdapter() }); 


// will take the props in the props object and spread it within the react component in key value pairs 
/**
 * Factory function to create a ShallowWrapper for the Congrats component. 
 * @function setup 
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props}/>)
}

test('renders without error', () => {
  const wrapper = setup(); 
  const component = findByTestAttr(wrapper, 'component-congrats'); 
  expect(component.length).toBe(1); 

}); 

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({success: false}); 
  const component = findByTestAttr(wrapper, 'component-congrats'); 
  expect(component.text()).toBe(''); 
  
}); 

test('renders non-empty congratulations message when `success` prop is true', () => {
  const wrapper = setup({success: true}); 
  const message = findByTestAttr(wrapper, 'congrats-message'); 
  expect(message.text().length).not.toBe(0); 

}); 

test('does not throw warning with expect props', () => {
  const expectedProps = {success: false}; 
   checkProps(Congrats, expectedProps); 
}); 

