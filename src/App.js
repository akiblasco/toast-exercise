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



/* 
The moment I started working on this part, is when I had to do most of the research. The amount of work it took
for me to unrust the limited JavaScript knowledge I had felt horrible. Luckily, there is a lot of documentation
on JavaScript, so I was able to reverse engineer some of the functions posted in various problems to implement in my code.
I also used co-pilot for minor debugging for the first itteration, since this is not my main programming language,
and syntax and formatting was taking me a long time.
*/

/*
First go at it was catastrophical with multiple issues found and errors. I will have to look at what I did wrong.
I get multiple uncaught reuntime errors (type errors) Saying it is expecting a string, but is getting an obejct,
and I do not know why is that. I tried fixing it but it did not seem to resolve this issue.
*/

/*
Panic and despair are starting to get to me as I make no progress with not even getting the button to show up, and my screen
turning red every time I click the new submission button. I think I need to familiarize myself with the code and environment a bit
more before I can try the implementation again. Will try to finish it as I get home, but because not having touched frontend, and especially
JavaSCript and react for years, I do not know if I will get it to work. There seems to be a type mismatch, I just do not understand where.
*/

/*
I ran npm test and said the test is passing but for some reason I am still getting errors in the local host server and it still is the type issue.
*/

/*
I am having to search a lot of the functions and syntax to verify I am doing it correctly, however, I do feel I am making progress. To be honest, there
is a gap between my Programming knowledge and logic that seems to be very sound and crucial for the understanding of the problem, and JavaScript, which is where
I am having the most trouble.
*/