import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Content({ likedToasts }) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {likedToasts.length > 0 ? (
        <ul>
          {likedToasts.map((toast, index) => (
            <li key={index}>{`${toast.firstName} ${toast.lastName} - ${toast.email}`}</li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1" sx={{ fontStyle: 'italic', marginTop: 1 }}>
          No liked submissions yet.
        </Typography>
      )}
    </Box>
  );
}

//Incorporated the liked submissions instead of the TODO line as instructed. When restarting correctly displays no liked submissions.