import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Person,
  Email,
  CalendarToday,
  Settings,
  Notifications,
  Security,
  History
} from '@mui/icons-material';

const UserProfile = () => {
  // This would typically come from your authentication context/state
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    avatar: '/path/to/avatar.jpg' // You would replace this with actual user avatar
  };

  const menuItems = [
    { icon: <Settings />, text: 'Account Settings' },
    { icon: <Notifications />, text: 'Notifications' },
    { icon: <Security />, text: 'Privacy & Security' },
    { icon: <History />, text: 'Activity History' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src={mockUser.avatar}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              {mockUser.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Member since {mockUser.joinDate}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          </Paper>
        </Grid>

        {/* User Details */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Person sx={{ mr: 2 }} />
                    <Typography>{mockUser.name}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Email sx={{ mr: 2 }} />
                    <Typography>{mockUser.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <CalendarToday sx={{ mr: 2 }} />
                    <Typography>Joined {mockUser.joinDate}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          {/* Quick Actions */}
          <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem button>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                  {index < menuItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;