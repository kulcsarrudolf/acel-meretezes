import { useState, useEffect } from 'react';

import {
  TextField,
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  withStyles,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { v4 as uuidv4 } from 'uuid';

import { values } from './service/values';
import { getValuesForGivenLambda } from './service/service';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    maxWidth: '32rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  table: {
    // minWidth: 650,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function App() {
  // const [allValues, setAllValues] = useState(values);
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
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
        <Grid item xs={12} justifyContent="center" alignItems="center">
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

            {showTable && (
              <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">λ</StyledTableCell>
                      <StyledTableCell align="center">a0</StyledTableCell>
                      <StyledTableCell align="center">a</StyledTableCell>
                      <StyledTableCell align="center">b</StyledTableCell>
                      <StyledTableCell align="center">c</StyledTableCell>
                      <StyledTableCell align="center">d</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {values.map((row) => (
                      <StyledTableRow key={uuidv4()}>
                        <StyledTableCell align="center">{row.lambda}</StyledTableCell>
                        <StyledTableCell align="center">{row.a0}</StyledTableCell>
                        <StyledTableCell align="center">{row.a}</StyledTableCell>
                        <StyledTableCell align="center">{row.b}</StyledTableCell>
                        <StyledTableCell align="center">{row.c}</StyledTableCell>
                        <StyledTableCell align="center">{row.d}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">λ</StyledTableCell>
                      <StyledTableCell align="center">a0</StyledTableCell>
                      <StyledTableCell align="center">a</StyledTableCell>
                      <StyledTableCell align="center">b</StyledTableCell>
                      <StyledTableCell align="center">c</StyledTableCell>
                      <StyledTableCell align="center">d</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Grid>

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
