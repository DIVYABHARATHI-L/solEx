import React, { createContext, useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ShareIcon from '@mui/icons-material/Share';
import PaidIcon from '@mui/icons-material/Paid';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import Login from './components/Login';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Community from './components/Community';
import UserProfile from './components/UserProfile';

// Create Authentication Context
export const AuthContext = createContext(null);

const StyledHero = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Solex ☀️
          </Typography>
          <Button color="inherit" onClick={() => navigate('/how-it-works')}>How It Works</Button>
          <Button color="inherit" onClick={() => navigate('/features')}>Features</Button>
          <Button color="inherit" onClick={() => navigate('/community')}>Join Community</Button>
          {user ? (
            <>
              <Button color="inherit" onClick={() => navigate('/profile')}>{user.name}</Button>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button variant="contained" color="secondary" onClick={() => navigate('/login')}>
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <StyledHero>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" display="block">🔥 Power the Future Together</Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                Turn Sunlight Into Income With Solex
              </Typography>
              <Typography variant="h5" paragraph>
                Share, trade, and earn from your solar energy with our smart P2P platform.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ mr: 2 }}
                  onClick={() => navigate(user ? '/profile' : '/login')}
                >
                  {user ? 'Go to Dashboard' : 'Get Started'}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ color: 'white', borderColor: 'white' }}
                  onClick={() => navigate('/demo')}
                >
                  Watch Demo
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <WbSunnyIcon sx={{ fontSize: 200, animation: 'pulse 2s infinite' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          How Solex Works
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <ElectricBoltIcon />, title: 'Generate Solar Power', description: 'Harness clean energy from your solar panels' },
            { icon: <ShareIcon />, title: 'Share Excess Energy', description: 'Distribute surplus power to the community' },
            { icon: <PaidIcon />, title: 'Earn & Save Instantly', description: 'Get paid for your contribution automatically' },
          ].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard onClick={() => navigate('/how-it-works')} sx={{ cursor: 'pointer' }}>
                <Box sx={{ mb: 2 }}>{step.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom>{step.title}</Typography>
                <Typography color="text.secondary">{step.description}</Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose Solex?
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <SpeedIcon />, title: 'Real-Time Energy Monitoring' },
            { icon: <ShareIcon />, title: 'P2P Energy Trading' },
            { icon: <SecurityIcon />, title: 'Blockchain-Powered Security' },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                sx={{ textAlign: 'center', mb: 4, cursor: 'pointer' }}
                onClick={() => navigate('/features')}
              >
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 1 }}>{feature.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/demo')}
          >
            Try Demo
          </Button>
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, mt: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Ready to Share the Sun?
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ mr: 2 }}
              onClick={() => navigate('/community')}
            >
              Join Our Community
            </Button>
            <Button variant="contained" color="secondary" size="large">App Store</Button>
          </Box>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 Solex. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
