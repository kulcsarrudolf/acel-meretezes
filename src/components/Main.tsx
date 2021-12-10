import { useState, useEffect } from 'react';

import { TextField, Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { v4 as uuidv4 } from 'uuid';

import ValuesTable from './ValuesTable';
import Footer from './Footer';

import { getValuesForGivenLambda } from '../service/service';
import { formatDecimalNumber } from '../service/formatDecimalNumber';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Main = () => {
  const classes = useStyles();

  const [currentValues, setCurrentValues] = useState<any>(getValuesForGivenLambda(0.2));
  const [lambda, setLambda] = useState('0.2');
  const [isValidInput, setIsValidInput] = useState(true);
  const [showTable, setShowTable] = useState(false);

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
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
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
              type="number"
              inputProps={{ step: '.1' }}
              onChange={handleChangeLambda}
            />
            <Alert severity="info">
              Az értékek a lentebb megtalálható táblázatból vannak kiolvasva. Abban az esetben, ha a
              keresett értékek nem találhatóak meg a táblázatban, interpoláció segítségével vannak
              kiszámítva.
            </Alert>
            {!isValidInput && (
              <Alert severity="error" style={{ marginTop: '0.5rem' }}>
                A λ értéke 0.2 és 3 között kell legyen.
              </Alert>
            )}
          </Paper>
        </Grid>
        {isValidInput && (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container direction="row" spacing={1}>
                <>
                  {['a0', 'a', 'b', 'c', 'd'].map((valueType) => (
                    <Grid item md={2} sm={6} xs={12} key={uuidv4()}>
                      <TextField
                        key={uuidv4()}
                        style={{ margin: '1rem' }}
                        variant="outlined"
                        label={valueType}
                        value={formatDecimalNumber(currentValues[valueType])}
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <CopyToClipboard text={formatDecimalNumber(currentValues[valueType])}>
                              <InputAdornment position="end">
                                <IconButton edge="end">
                                  <FileCopyIcon />
                                </IconButton>
                              </InputAdornment>
                            </CopyToClipboard>
                          ),
                        }}
                      />
                    </Grid>
                  ))}
                </>
              </Grid>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ExpandMoreIcon />}
              onClick={() => {
                setShowTable((perv) => !perv);
              }}
            >
              Tablázat {showTable ? 'elrejtése' : 'megjelenítése'}
            </Button>

            {showTable && <ValuesTable />}
          </Paper>
        </Grid>

        <Footer />
      </Grid>
    </>
  );
};

export default Main;
