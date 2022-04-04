// Brand Quality Table
import React from 'react';
import { Button } from '@mui/material';
// import { Button } from 'react-bootstrap';
import { TextField, TableCell, TableBody, Table, TableRow, TableContainer, TableHead, Paper, tableCellClasses, styled,createTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './BrandQuality.css'


function BrandQualityTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];

 


  return (
    <div className='body-down'>
      <div className='table-cont'>

        <TableContainer >
          <Table >
            <TableHead >
              <TableRow >
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell align="right">Discription</StyledTableCell>
                <StyledTableCell align="right">Brand</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <StyledTableRow key={row.name}  >
                  <StyledTableCell component="th" scope="row"  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" color="success" className='Button-delete' ><DeleteIcon /></Button>
                    {/* <Button variant="contained" color="primary" className='Button-delete' ><DeleteIcon /></Button> */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>


  );
}

export default BrandQualityTable;
