import React, { useState } from 'react';
import styles from './AskedQuestions.module.scss';
import { FaPlus, FaTimes } from 'react-icons/fa';

const askedQuestions = [
  {
    question: 'What business naming services does Squadhelp offer?',
    answer: [
      'Squadhelp’s main brand naming services include:',
      '(1) A Name Marketplace which features ~150K of the best names on the web. We have reviewed more than 6 million names ideas with domains using AI, machine learning, and manual reviews to curate powerful collections of names available for immediate purchase.',
      '(2) Crowdsourced Naming Contest allows you to engage our community of more than 250,000 creatives to receive a huge breadth of name ideas and find the perfect name quickly.',
      '(3) Managed Naming Services offer the white glove experience of a naming agency with all the benefits of crowdsourcing.',
    ],
  },
  {
    question: 'Is Squadhelp a naming agency?',
    answer: [
      'Squadhelp is the next generation of a brand naming agency. Our multiple unique approaches to naming and branding encouraged Inc. Magazine to select us as one of the most innovative fast growing startups in America.',
    ],
  },
  {
    question: 'How do I get started when naming my brand?',
    answer: [
      'The first step to naming your venture is to understand your brand. Start by answering these questions: What immediate impression do I want to instill? What are my core brand values? How do I want people to feel? What differentiates me from my competition? Who are my customers?',
      'Once you have a vision for where you want to take your brand, you can start brainstorming brand name ideas.',
    ],
  },
];

const AskedQuestions = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const handleQuestionClick = (index) => {
    setShowAnswer({ ...showAnswer, [index]: !showAnswer[index] });
  };

  const renderQuestion = (q, i) => {
    return (
      <div
        key={i}
        className={
          showAnswer[i]
            ? `${styles['questionItem']} ${styles['showAnswer']}`
            : styles['questionItem']
        }
      >
        <h3 onClick={() => handleQuestionClick(i)}>
          {q.question}
          {showAnswer[i] ? <FaTimes /> : <FaPlus />}
        </h3>
        <div className={styles['answerContainer']}>
          <ul>
            {q.answer.map((a, i) => (
              <li key={i}>{a}</li>
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
