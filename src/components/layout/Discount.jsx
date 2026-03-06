import React from 'react';
import {
  Box, Typography, Stack, Button, useTheme
} from '@mui/material';
import LayoutContainer from '../../components/common/LayoutContainer';

const Discount = () => {
  const theme = useTheme();

  return (
    <LayoutContainer>
      <Box
        sx={{
          borderRadius: '10px',
          mt: 3,
          overflow: 'hidden',
          background: 'linear-gradient(58deg, #237CFF 65%, #005ADE 65%)',
          border: '1px solid',
          borderColor: 'divider',
          mb: 10
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: { xs: 2, md: 3 }, minHeight: '100px' }}
        >
          {/* TEXT SECTION */}
          <Stack spacing={0.5} textAlign="left">
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "600",
                color: "#fff"
              }}
            >
              Super discount on more than 100 USD
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.8)"
              }}
            >
              Have you ever finally just write dummy info
            </Typography>
          </Stack>

          {/* BUTTON SECTION */}
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF9017',
              color: '#fff',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 500,
              px: 3,
              py: 1,
              '&:hover': {
                bgcolor: '#ecb376'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            Shop now
          </Button>
        </Stack>
      </Box>
    </LayoutContainer>
  );
};

export default Discount;