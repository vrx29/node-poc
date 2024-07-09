import { useState } from 'react';
import Dropdown from './Dropdown';
import QuestionList from './QuestionList';

const App = () => {
  const topics = {
    React: [
      'What is React?',
      'What are hooks in React?',
      'Explain the virtual DOM in React.',
    ],
    JavaScript: [
      'What is a closure?',
      'Explain the event loop.',
      'What is hoisting?',
    ],
    CSS: ['What is Flexbox?', 'What is Grid layout?', 'Explain the box model.'],
  };

  const [selectedTopic, setSelectedTopic] = useState('');
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className='App'>
      <h1>Topic Questions App</h1>
      <Dropdown
        topics={Object.keys(topics)}
        onSelect={(topic) => {
          setSelectedTopic(topic);
          setAnswers({});
          setCurrentQuestionIndex(0);
        }}
      />
      {selectedTopic && (
        <QuestionList
          questions={topics[selectedTopic]}
          currentQuestionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
          answers={answers}
        />
      )}
    </div>
  );
};

export default App;
