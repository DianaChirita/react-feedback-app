import { useContext } from 'react';

import Feedback from './Feedback';

import FeedbackContext from '../context/FeedbackContext';

import Spinner from '../shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedback key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
