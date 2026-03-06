import React from 'react';
import { Breadcrumbs, Link, Typography, Box, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles';
import LayoutContainer from '../../components/common/LayoutContainer';

const BreadcrumbSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <LayoutContainer>
      <Box 
        sx={{ 
          py: { xs: 1.5, md: 2 },
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Breadcrumbs 
          separator={<NavigateNextIcon sx={{ fontSize: { xs: '16px', md: '20px' }, color: "#8B96A5" }} />} 
          aria-label="breadcrumb"
          sx={{ 
            '& .MuiBreadcrumbs-li': { 
              fontSize: { xs: '13px', md: '14px' }, 
              color: isDark ? '#fff' : '#8B96A5' 
            } 
          }}
        >
          <Link underline="hover" color="inherit" href="/">Home</Link>
          <Link underline="hover" color="inherit" href="#">Mobiles</Link>
          <Link underline="hover" color="inherit" href="#">Mobile Accessory</Link>
        </Breadcrumbs>
      </Box>
    </LayoutContainer>
  );
};

export default BreadcrumbSection;