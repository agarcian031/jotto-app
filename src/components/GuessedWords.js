import React from 'react'; 
import PropTypes from 'proptypes'; 

const GuessedWords = () => {
  return (
    <div>

      
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired, 
      letterMatchCount: PropTypes.number.isRequired, 
    })
  ).isRequired

}; 

export default GuessedWords
