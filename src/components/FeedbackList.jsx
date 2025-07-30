import { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/feedback').then(res => setFeedback(res.data));
  }, []);

  const handleReview = async (id) => {
    await axios.put(`http://localhost:5000/api/feedback/${id}`);
    setFeedback(prev => prev.map(f => f._id === id ? { ...f, reviewed: true } : f));
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/feedback/${id}`);
    setFeedback(prev => prev.filter(f => f._id !== id));
  };

  return (
    <ul>
      {feedback.map(item => (
        <li key={item._id}>
          {item.message} {item.reviewed ? "(Reviewed)" : ""}
          <button onClick={() => handleReview(item._id)}>Mark Reviewed</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
