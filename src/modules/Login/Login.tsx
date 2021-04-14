import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  createStyles,
  Grid,
  makeStyles,
  styled,
  TextField,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LookIcon from '@material-ui/icons/Lock';
import AvatarImg from './assets/avatar.webp';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '100px 70px',
    },
    cardHeader: {
      flexBasis: '50%',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    cardContent: {
      flexBasis: '100%',
      marginBottom: 35,
      padding: 0,
    },
    cardWrapper: {
      display: 'flex',
      flexBasis: '50%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardAction: {
      padding: 0,
      flexBasis: '100%',
    },
    grid: {
      background: '#e6e6e6',
      borderRadius: 30,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 20,
      padding: '5px 20px',
      '& .MuiGrid-item': {
        marginRight: 10,
      },
      '& .MuiGrid-item:last-child': {
        marginRight: 0,
        width: '80%',
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
    gridInput: {
      color: '#666',
      width: '100%',
      '& .MuiInput-underline:before': {
        content: 'none',
      },
      '& .MuiInput-underline:after': {
        content: 'none',
      },
      '& label + .MuiInput-formControl': {
        height: 50,
        marginTop: 0,
      },
      '& .MuiInputLabel-formControl': {
        transform: 'translate(0, 16px) scale(1)',
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0, 0.5px) scale(0.75)',
        color: '#333',
      },
    },
    btn: {
      fontSize: 15,
      lineHeight: 1.5,
      color: '#fff',
      textTransform: 'uppercase',
      width: '100%',
      height: '50px',
      borderRadius: '25px',
      background: '#57b846',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '25px 115px',
      transition: 'all .4s',
      '&:hover': {
        background: '#333',
      },
    },
    h2: {
      textAlign: 'center',
    },
  })
);

const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={<img src={AvatarImg} alt="avatar" />}
        />
        <Box className={classes.cardWrapper}>
          <CardContent className={classes.cardContent}>
            <h2 className={classes.h2}>Авторизация</h2>
            <form action="">
              <Grid className={classes.grid} container alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>

                <Grid item>
                  <TextField
                    className={classes.gridInput}
                    id="username"
                    label="Username"
                  />
                </Grid>
              </Grid>
              <Grid className={classes.grid} container alignItems="flex-end">
                <Grid item>
                  <LookIcon />
                </Grid>

                <Grid item>
                  <TextField
                    className={classes.gridInput}
                    id="password"
                    label="Password"
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Button className={classes.btn}>Login</Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
