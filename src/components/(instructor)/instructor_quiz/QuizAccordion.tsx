import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const questions = [
  {
    id: 1,
    question: 'What are the five stages of the UX process?',
    options: [
      'Usability Experience',
      'User Experience',
      'User Explore',
      'User Interface',
    ],
    answer: 'User Experience',
  },
  {
    id: 2,
    question: 'What are the five stages of the UX process?',
    options: [
      'Usability Experience',
      'User Experience',
      'User Explore',
      'User Interface',
    ],
    answer: 'User Experience',
  },
  {
    id: 3,
    question: 'What are the five stages of the UX process?',
    options: [
      'Usability Experience',
      'User Experience',
      'User Explore',
      'User Interface',
    ],
    answer: 'User Experience',
  },
  {
    id: 4,
    question: 'What are the five stages of the UX process?',
    options: [
      'Usability Experience',
      'User Experience',
      'User Explore',
      'User Interface',
    ],
    answer: 'User Experience',
  },
];

const QuizAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg space-y-4">
      {questions.map((q, index) => (
        <div key={index} className="bg-gray-background border rounded-md">
          {/* Question Header */}
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-4 py-3 flex justify-between items-center text-left text-black-normal font-medium"
          >
            <span>{`${index + 1 < 10 ? '0' + (index + 1) : index + 1} ${q.question}`}</span>
            {openIndex === index ? (
              <FaMinus className="text-gray-500" />
            ) : (
              <FaPlus className="text-gray-500" />
            )}
          </button>

          {/* Question Content */}
          {openIndex === index && q.options && (
            <div className="px-6 pb-4 text-black-primary">
              <ul className="space-y-2">
                {q.options.map((opt, i) => (
                  <li key={i}>
                    <span className="font-medium">{String.fromCharCode(65 + i)}.</span>{' '}
                    {opt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-green-600 font-medium">
                Current Answer. <span className="text-black-primary">{q.answer}</span>
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <div className="pt-4">
        <button className="w-full py-3 bg-yellow-primary hover:bg-yellow-400 text-black font-semibold rounded-md transition cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizAccordion;
