import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #3f51b5, #1a237e)',
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontSize: 16,
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function HeroSection() {
  const classes = useStyles(); // Use the styles

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="div">
            Welcome to Hero Section
          </Typography>
          <Typography className={classes.subtitle} variant="body2">
            Build beautiful UIs faster with Material-UI.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} variant="contained">
            Get Started
          </Button>
          <Button className={classes.button} variant="outlined">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default HeroSection;