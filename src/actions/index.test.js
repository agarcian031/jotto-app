// going to call moxios install and uninstall 
import moxios from 'moxios'; 

import {storeFactory} from '../../test/testUtils'; 
import {getSecretWord} from './index'; 

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    // will call moxios install to tell axios to use moxios for all of its requests
    moxios.install(); 

  }); 
  afterEach(() => {
    moxios.uninstall(); 
  }); 
  test('adds response word to state', () => {
    const secretWord = 'party'; 
    const store = storeFactory();
    
    
    moxios.wait(() => {
      const request = moxios.requests.mostRecent(); 
      request.respondWith({
        status: 200, 
        response: secretWord, 
      })
    })

    return store.dispatch(getSecretWord())
    .then(() => {
      const newState = store.getState(); 
      expect(newState.secretWord).toBe(secretWord); 
    })
  }); 
});
