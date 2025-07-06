import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import ShareIcon from '@mui/icons-material/Share';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Features = () => {
  const features = [
    {
      icon: <SpeedIcon fontSize="large" color="primary" />,
      title: 'Real-Time Energy Monitoring',
      description: 'Track your solar energy production and consumption in real-time with our advanced monitoring system.',
      benefits: [
        'Live energy production metrics',
        'Consumption pattern analysis',
        'Performance optimization suggestions',
        'Historical data tracking'
      ]
    },
    {
      icon: <ShareIcon fontSize="large" color="primary" />,
      title: 'P2P Energy Trading',
      description: 'Share excess solar energy with your community through our innovative peer-to-peer trading platform.',
      benefits: [
        'Direct energy trading',
        'Flexible pricing options',
        'Community marketplace',
        'Automated matching'
      ]
    },
    {
      icon: <SecurityIcon fontSize="large" color="primary" />,
      title: 'Blockchain Security',
      description: 'Every transaction is secured using advanced blockchain technology, ensuring transparency and trust.',
      benefits: [
        'Immutable transaction records',
        'Smart contracts',
        'Encrypted communications',
        'Secure payments'
      ]
    },
    {
      icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
      title: 'Smart Payments',
      description: 'Automated payment processing for energy trades with multiple payment options and instant settlements.',
      benefits: [
        'Instant settlements',
        'Multiple payment methods',
        'Automated billing',
        'Transaction history'
      ]
    },
    {
      icon: <ShowChartIcon fontSize="large" color="primary" />,
      title: 'AI-Powered Analytics',
      description: 'Make informed decisions with our AI-driven analytics and predictive insights.',
      benefits: [
        'Energy usage predictions',
        'Price optimization',
        'Performance analytics',
        'Custom reports'
      ]
    },
    {
      icon: <GroupIcon fontSize="large" color="primary" />,
      title: 'Community Network',
      description: 'Join a growing community of solar energy enthusiasts and share experiences.',
      benefits: [
        'Community forums',
        'Knowledge sharing',
        'Local energy groups',
        'Event notifications'
      ]
    },
    {
      icon: <DevicesIcon fontSize="large" color="primary" />,
      title: 'Multi-Device Support',
      description: 'Access your solar energy dashboard from any device with our responsive platform.',
      benefits: [
        'Mobile app',
        'Web dashboard',
        'Smart home integration',
        'Cross-platform sync'
      ]
    },
    {
      icon: <NotificationsActiveIcon fontSize="large" color="primary" />,
      title: 'Smart Alerts',
      description: 'Stay informed with customizable notifications about your energy system.',
      benefits: [
        'Performance alerts',
        'Maintenance reminders',
        'Price notifications',
        'System updates'
      ]
    },
    {
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team.',
      benefits: [
        'Live chat support',
        'Technical assistance',
        'Online documentation',
        'Community support'
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Powerful Features
        </Typography>
        <Typography variant="h5" color="text.secondary" align="center" sx={{ mb: 8 }}>
          Discover how Solex empowers you to maximize your solar energy investment
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {feature.icon}
                  <Typography variant="h5" component="h3" sx={{ ml: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {feature.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Key Benefits:
                  </Typography>
                  <Grid container spacing={1}>
                    {feature.benefits.map((benefit, idx) => (
                      <Grid item xs={12} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              mr: 1,
                            }}
                          />
                          <Typography variant="body2">{benefit}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;