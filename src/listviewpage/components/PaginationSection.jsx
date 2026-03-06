import React from 'react';
import { Pagination, Select, MenuItem, Stack, Box } from '@mui/material';

const PaginationSection = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          mt: 4,
          mb: 6
        }}
      >
        <Select defaultValue={10} size="small">
          <MenuItem value={10}>Show 10</MenuItem>
          <MenuItem value={20}>Show 20</MenuItem>
        </Select>

        <Pagination
          count={3}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default PaginationSection;