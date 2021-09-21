import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography className={classes.paper}>
        <b>Készítette:</b>{' '}
        <i>
          <a target="_blank" rel="noreferrer" href="https://kulcsarrudolf.com/">
            Kulcsár Rudolf
          </a>
        </i>
      </Typography>
    </Grid>
  );
};

export default Footer;
