import { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await axios.post('/api/feedback', { message }); // ← Vite proxy handles /api
      console.log('✅ Feedback submitted:', res.data);
      setStatus('Thank you for your feedback!');
      setMessage('');
    } catch (error) {
      console.error('❌ Submission error:', error);
      setStatus('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Feedback Box</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          style={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback here..."
          required
        />
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    minHeight: '100px',
    resize: 'vertical',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#6a5acd',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  status: {
    marginTop: '10px',
    textAlign: 'center',
    color: 'green',
  },
};

export default FeedbackForm;
