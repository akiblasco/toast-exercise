import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

function Toast({ toast, onLike, onDismiss }) {
  return (
    <Snackbar
      open={true}
      message={`${toast.firstName} ${toast.lastName} ${toast.email}`}
      action={
        <>
          <Button color="secondary" size="small" onClick={onLike}>
            Like
          </Button>
          <Button color="secondary" size="small" onClick={onDismiss}>
            Dismiss
          </Button>
        </>
      }
    />
  );
}

export default Toast;
/*
-Frontend not being my main focus, my heart dropped when I saw I had to use react for this challenge. 
From this point on, I knew I would spend most of my time researching and googling in order to complete this challenge. 
The first thing I did was read the instructions and write down every thing that I did not understand so I could research it when doing the implementation. 
Although I am familiar with the general concepts and flow of the task at hand, I did have to investigate from how to ensure the setup was correct, and search some syntax for JavaScript. I also encountered an issue where the package.json file was not being read properly, but a clean installation and setup for the project seemed to resolve this. 
That being said, I started by working on the Toast.js before adding any functionality. 
*/