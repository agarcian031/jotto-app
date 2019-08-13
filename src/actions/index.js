export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS', 


}; 

// redux actions are objects that have a type key and some kind of payload 
export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS

  }
}