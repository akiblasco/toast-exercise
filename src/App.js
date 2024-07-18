import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Content from './Content';
import Toast from './Toast';
import { onMessage, saveLikedFormSubmission, fetchLikedFormSubmissions } from './service/mockServer';

function App() {
  const [toasts, setToasts] = useState([]); // State for current toasts
  const [likedToasts, setLikedToasts] = useState([]); // State for liked toasts -> think of it as a Class with functions in python

  // Fetch liked submissions on component mount
  useEffect(() => {
    fetchLikedFormSubmissions()
      .then(response => {
        setLikedToasts(response.formSubmissions); // Update likedToasts state with fetched submissions
      })
      .catch(error => console.error('Error fetching liked submissions:', error));
    
    // Listen for new form submissions
    onMessage((newSubmission) => {
      setToasts(prevToasts => [...prevToasts, newSubmission]); // new submission to toasts state, kinda like a queue
    });
  }, []);

  // Handle like action - revised
  const handleLike = (toast) => {
    saveLikedFormSubmission(toast)
      .then(() => setLikedToasts([...likedToasts, toast])) // Update likedToasts state
      .catch(error => console.error('Error saving liked submission:', error));
  };

  // Handle dismissing functionality - revised
  const handleDismiss = (toast) => {
    setToasts(toasts.filter(t => t !== toast)); // Remove toast from toasts state, should be removed 
  };

  return (
    <>
      <Header />
      <Container>
        <Content likedToasts={likedToasts} />
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            toast={toast.data}
            onLike={() => handleLike(toast.data)}
            onDismiss={() => handleDismiss(toast)}
          />
        ))}
      </Container>
    </>
  );
}

export default App;



