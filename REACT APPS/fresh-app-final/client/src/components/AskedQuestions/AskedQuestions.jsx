import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import styles from './AskedQuestions.module.scss';
import askedQuestions from './askedQuestions.json';

const AskedQuestions = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const handleQuestionClick = (index) => {
    setShowAnswer({ ...showAnswer, [index]: !showAnswer[index] });
  };

  const renderQuestion = (question, index) => {
    const isAnswerVisible = showAnswer[index];
    const questionItemClasses =
      styles['questionItem'] +
      (isAnswerVisible ? ' ' + styles['showAnswer'] : '');

    return (
      <div key={index} className={questionItemClasses}>
        <h3 onClick={() => handleQuestionClick(index)}>
          {question.question}
          {isAnswerVisible ? <FaTimes /> : <FaPlus />}
        </h3>
        <div className={styles['answerContainer']}>
          <ul>
            {question.answer.map((answer, i) => (
              <li key={i}>{answer}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={styles['askedQuestionsContainer']}>
      <h2>Frequently Asked Questions</h2>
      {askedQuestions.map(renderQuestion)}
    </div>
  );
};

export default AskedQuestions;
