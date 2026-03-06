import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, useTheme } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LayoutContainer from '../../components/common/LayoutContainer';

const SubscribeSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: isDark ? 'background.default' : '#EFF2F4',
        py: 6,
      }}
    >
      <LayoutContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* HEADER TEXT */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1,
            }}
          >
            Subscribe on our newsletter
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: '16px',
            }}
          >
            Get daily news on upcoming offers from many suppliers all over the world
          </Typography>

          {/* FORM SECTION */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 1,
              width: { xs: '90%', sm: '400px' },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              fullWidth
              placeholder="Email"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'divider',
                  },
                },
              }}
            />

            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: '#127FFF',
                color: '#fff',
                textTransform: 'none',
                px: 3,
                fontWeight: 400,
                whiteSpace: 'nowrap',
                '&:hover': {
                  bgcolor: '#0067DB',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default SubscribeSection;