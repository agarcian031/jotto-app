import Enzyme, {shallow} from 'enzyme'; 
import EnzymeAdapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({
  adapter: new EnzymeAdapter(), 
  disableLifecycleMethods: true, //will keep component did mount from running when we create a react shallow wrapper. 
}); 
