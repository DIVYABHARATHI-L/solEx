import React from 'react';
import YouTube from 'react-youtube';
import { Container, Typography, Box, Paper } from '@mui/material';

const Demo = () => {
  const videoOpts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          See Solex in Action
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Watch how Solex is revolutionizing solar energy sharing
        </Typography>
        <Box sx={{ position: 'relative', paddingTop: '2rem' }}>
          <YouTube
            videoId="e9rxkdnEevo"
            opts={videoOpts}
            style={{ maxWidth: '100%' }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Demo;