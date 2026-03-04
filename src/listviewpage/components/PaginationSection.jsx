import React from 'react';
import { Box, Pagination, Select, MenuItem, Stack } from '@mui/material';

const PaginationSection = () => (
  <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 4, mb: 6 }}>
    <Select defaultValue={10} size="small" sx={{ height: '32px' }}>
      <MenuItem value={10}>Show 10</MenuItem>
      <MenuItem value={20}>Show 20</MenuItem>
    </Select>
    <Pagination count={3} variant="outlined" shape="rounded" color="primary" />
  </Stack>
);

export default PaginationSection;