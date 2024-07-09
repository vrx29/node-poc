import Question from './Question';

const QuestionList = ({
  questions,
  currentQuestionIndex,
  onAnswer,
  answers,
}) => {
  return (
    <div>
      <h2>Questions:</h2>
      {questions.map((question, index) => (
        <div
          key={index}
          style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}
        >
          <Question question={question} onAnswer={onAnswer} />
        </div>
      ))}
      {currentQuestionIndex >= questions.length && (
        <div>
          <h3>All Questions and Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question}: {answers[question]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
