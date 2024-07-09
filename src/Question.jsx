const Question = ({ question, onAnswer }) => {
  const handleAnswer = (answer) => {
    onAnswer(question, answer);
  };

  return (
    <div>
      <p>{question}</p>
      <button onClick={() => handleAnswer('Yes')}>Yes</button>
      <button onClick={() => handleAnswer('No')}>No</button>
    </div>
  );
};

export default Question;
