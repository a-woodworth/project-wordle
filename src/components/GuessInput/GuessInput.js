import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(currentGuess);

    setCurrentGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={currentGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setCurrentGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
