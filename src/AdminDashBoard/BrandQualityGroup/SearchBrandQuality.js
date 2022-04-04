// In Search Brand Quality
import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { TextField, TableCell, TableBody, Table, TableRow, TableContainer, TableHead, Paper, tableCellClasses, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import './BrandQuality.css'

function SearchBrandQuality() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
 

      <div className='body-down'>
        <p className='title'><b>Available Brand Quality Groups</b></p>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <div>
            <SearchIcon className='icon' /><TextField id="standard-basic" label="Filter Groups" variant="standard" />
          </div>

          {/* <Button variant="contained" color="success" className='add-button' >Create New Quality Group</Button> */}
          <Button variant="contained" onClick={handleClickOpen} color="success"  >Create New Quality Group</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create New Quality Group</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Quality Group Code*"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Description*"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Create</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>

        </Box>
    </div>
  );
}

export default SearchBrandQuality;
