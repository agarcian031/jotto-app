import {correctGuess, actionTypes}  from './index'; 

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
      const action = correctGuess(); 
      // will compare the contents of the object instead of the object. 
      // cant use to be on mutable objects - arrays, etc. 
      expect(action).toEqual({ type: actionTypes.CORRECT_GUESS})
    })
});
