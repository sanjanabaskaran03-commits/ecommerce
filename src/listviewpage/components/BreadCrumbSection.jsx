import React from 'react';
import { Breadcrumbs, Link, Typography, Box,Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles';

const BreadcrumbSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Stack width="1150px" sx={{display:"flex",justifyContent:"flex-start"}}>
    <Box sx={{ py: 2}}>
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" sx={{color:"#8B96A5"}} />} 
        aria-label="breadcrumb"
        sx={{ '& .MuiBreadcrumbs-li': { fontSize: '14px', color: isDark?'#fff':'#8B96A5' } }}
      >
        <Link underline="hover" color="inherit" href="/">Home</Link>
        <Link underline="hover" color="inherit" href="#">Mobiles</Link>
        <Link underline="hover" color="inherit" href="#">Mobile Accessory</Link>
      </Breadcrumbs>
    </Box>
    </Stack>
  );
};

export default BreadcrumbSection;