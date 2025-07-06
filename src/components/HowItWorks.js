import React from 'react';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ShareIcon from '@mui/icons-material/Share';
import PaidIcon from '@mui/icons-material/Paid';
import DevicesIcon from '@mui/icons-material/Devices';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ElectricBoltIcon color="primary" fontSize="large" />,
      title: 'Generate Solar Power',
      description: 'Your solar panels convert sunlight into clean, renewable electricity. Our smart meters accurately measure your energy production in real-time.',
      details: [
        'Advanced solar panel integration',
        'Real-time energy monitoring',
        'Smart meter compatibility',
        'Automated production tracking'
      ]
    },
    {
      icon: <ShareIcon color="primary" fontSize="large" />,
      title: 'Share Excess Energy',
      description: 'When you produce more energy than you need, Solex automatically detects the surplus and makes it available to the community.',
      details: [
        'Automated surplus detection',
        'Smart grid integration',
        'Community energy pool',
        'Flexible sharing options'
      ]
    },
    {
      icon: <PaidIcon color="primary" fontSize="large" />,
      title: 'Earn & Save',
      description: 'Get paid automatically for the energy you share. Set your prices or let our AI optimize them based on market demand.',
      details: [
        'Instant payments',
        'Dynamic pricing',
        'AI-driven optimization',
        'Multiple payment methods'
      ]
    }
  ];

  const features = [
    {
      icon: <DevicesIcon color="secondary" fontSize="large" />,
      title: 'Smart Device Integration',
      description: 'Compatible with most solar installations and smart meters'
    },
    {
      icon: <BarChartIcon color="secondary" fontSize="large" />,
      title: 'Analytics Dashboard',
      description: 'Track your energy production, sharing, and earnings in real-time'
    },
    {
      icon: <SecurityIcon color="secondary" fontSize="large" />,
      title: 'Secure Transactions',
      description: 'Blockchain-powered security for all energy trades and payments'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          How Solex Works
        </Typography>
        <Typography variant="h5" color="text.secondary" align="center" sx={{ mb: 8 }}>
          Transform the way you manage and share solar energy in three simple steps
        </Typography>

        {steps.map((step, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {step.icon}
                  <Typography variant="h4" component="h2" sx={{ ml: 2 }}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {step.description}
                </Typography>
                <List>
                  {step.details.map((detail, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: 300,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Placeholder for step illustration */}
                  <Typography variant="body2" color="text.secondary">
                    Step {index + 1} Illustration
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}

        <Typography variant="h3" align="center" sx={{ mt: 8, mb: 4 }}>
          Additional Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {feature.icon}
                <Typography variant="h5" component="h3" sx={{ my: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;