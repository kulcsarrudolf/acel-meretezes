import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles,
} from '@material-ui/core';

import { v4 as uuidv4 } from 'uuid';

import { values } from '../service/values';

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

const ValuesTable = () => (
  <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
    <Table aria-label="simple table">
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
        {values.map((row: any) => (
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
);

export default ValuesTable;
