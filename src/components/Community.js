import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, TextField, Avatar, Divider } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import ChatIcon from '@mui/icons-material/Chat';

const Community = () => {
  const discussions = [
    {
      title: 'Solar Panel Optimization Tips',
      author: 'SolarPro',
      replies: 23,
      views: 156,
      lastActive: '2 hours ago'
    },
    {
      title: 'Energy Trading Success Stories',
      author: 'GreenEnergy',
      replies: 45,
      views: 289,
      lastActive: '5 hours ago'
    },
    {
      title: 'New to Solex - Getting Started',
      author: 'NewUser',
      replies: 67,
      views: 432,
      lastActive: '1 hour ago'
    }
  ];

  const events = [
    {
      title: 'Solar Energy Workshop',
      date: 'Next Saturday',
      attendees: 45,
      type: 'Online'
    },
    {
      title: 'Community Meetup',
      date: 'June 15',
      attendees: 120,
      type: 'In-Person'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Solex Community
        </Typography>
        <Typography variant="h5" color="text.secondary" align="center" sx={{ mb: 8 }}>
          Connect, share, and grow with fellow solar energy enthusiasts
        </Typography>

        <Grid container spacing={4}>
          {/* Forums Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ForumIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Discussion Forums</Typography>
              </Box>
              {discussions.map((discussion, index) => (
                <Paper 
                  key={index} 
                  elevation={1} 
                  sx={{ 
                    p: 2, 
                    mb: 2,
                    '&:hover': {
                      bgcolor: 'action.hover',
                      cursor: 'pointer'
                    }
                  }}
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6">{discussion.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {discussion.author}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Typography variant="body2">{discussion.replies} replies</Typography>
                        <Typography variant="body2">{discussion.views} views</Typography>
                        <Typography variant="body2">{discussion.lastActive}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Start New Discussion
              </Button>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Community Stats */}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <GroupIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h5">Community Stats</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4">5,234</Typography>
                  <Typography variant="body2">Members</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4">1,423</Typography>
                  <Typography variant="body2">Discussions</Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Upcoming Events */}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EventIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h5">Upcoming Events</Typography>
              </Box>
              {events.map((event, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.date} • {event.attendees} attending • {event.type}
                  </Typography>
                  {index < events.length - 1 && <Divider sx={{ my: 2 }} />}
                </Box>
              ))}
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                View All Events
              </Button>
            </Paper>

            {/* Live Chat */}
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ChatIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h5">Live Chat</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Connect with community members in real-time
              </Typography>
              <Button variant="contained" fullWidth color="secondary">
                Join Chat
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Community;