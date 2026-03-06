import React from 'react';
import { Box, Typography, Stack, Select, MenuItem, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import LayoutContainer from '../../components/common/LayoutContainer';

const ProductListHeader = () => {
  return (
    <Box sx={{ 
  p: 2, 
  bgcolor: 'background.paper', 
  color: 'text.primary',     
  border: '1px solid',
  borderColor: 'divider', 
  borderRadius: '6px',
  mb: 2,
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center'
}}>
      <Typography variant="body1">
        12,011 items in <b>Mobile accessory</b>
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Verified only" />
        <Select defaultValue="Featured" size="small" sx={{ height: '32px', minWidth: '120px' }}>
          <MenuItem value="Featured">Featured</MenuItem>
          <MenuItem value="Newest">Newest items</MenuItem>
        </Select>
        <Stack direction="row" sx={{ border: '1px solid #E3E8EE',borderColor: 'divider',  borderRadius: '4px', overflow: 'hidden' }}>
          <IconButton size="small" sx={{ borderRadius: 0, borderColor: 'divider', borderRight: 'divider','&:focus':{outline:'none'} }}><GridViewIcon fontSize="small" /></IconButton>
          <IconButton size="small" sx={{ borderRadius: 0, borderRight: 'divider','&:focus':{outline:'none'} }}><ViewListIcon fontSize="small" /></IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductListHeader;