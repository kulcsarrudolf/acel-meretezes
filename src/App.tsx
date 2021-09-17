import { useState, useEffect } from 'react';

import { TextField, Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { v4 as uuidv4 } from 'uuid';

// import { values } from './service/values';
import { getValuesForGivenLambda } from './service/service';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    maxWidth: '30rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function App() {
  // TODO: table component
  // const [allValues, setAllValues] = useState(values);
  const classes = useStyles();

  const [currentValues, setCurrentValues] = useState<any>(getValuesForGivenLambda(1.8));
  const [lambda, setLambda] = useState('1.8');
  const [isValidInput, setIsValidInput] = useState(true);

  const handleChangeLambda = (e: any) => {
    setLambda(e.target.value);
  };

  useEffect(() => {
    try {
      setIsValidInput(true);
      setCurrentValues(getValuesForGivenLambda(parseFloat(lambda)));
    } catch (error) {
      setIsValidInput(false);
    }
  }, [lambda]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.root}
      >
        <Grid item xs={12} justifyContent="center" alignItems="center">
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Acél méretezés
            </Typography>
            <TextField
              style={{ maxWidth: '10rem', margin: '1rem' }}
              required
              id="filled-required"
              label="λ"
              value={lambda}
              variant="outlined"
              onChange={handleChangeLambda}
            />

            {!isValidInput && (
              <Alert severity="error">A λ értéke 0.2 és 3 között kell legyen.</Alert>
            )}
          </Paper>
        </Grid>
        {isValidInput && (
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <Paper className={classes.paper}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                {/* {isValidInput && ( */}
                <>
                  {['a0', 'a', 'b', 'c', 'd'].map((valueType) => (
                    <Grid item xs={6} key={uuidv4()}>
                      <Paper className={classes.paper}>
                        <TextField
                          key={uuidv4()}
                          style={{ maxWidth: '10rem', margin: '1rem' }}
                          variant="outlined"
                          label={valueType}
                          value={currentValues[valueType]}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </>
                {/* )} */}
              </Grid>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography className={classes.paper}>
            <b>Készítette:</b> <i>Kulcsár Rudolf</i>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
