import React, { useState } from 'react';
import {
  Box, Typography, Stack, Link, TableCell, TableBody, TableRow, TableContainer, Table
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LayoutContainer from '../../components/common/LayoutContainer';
import Apple from '/images/listviewpage/mobile.png';
import Samsung from '/images/listviewpage/mobile2.png';
import Poco from '/images/listviewpage/tab.png';
import Canon from '/images/listviewpage/laptop.png';
import Watch from '/images/listviewpage/watch.png';


const Description = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const relatedProducts = [
    { id: 1, name: 'Apple iPhone 14 Pro', price: '$7.00 - $99.50', img: Apple },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '$7.00 - $99.50', img: Samsung },
    { id: 3, name: 'Poco X5 Pro 5G', price: '$7.00 - $99.50', img: Poco },
    { id: 4, name: 'Canon Camera EOS 2000', price: '$7.00 - $99.50', img: Canon },
    { id: 5, name: "Huawei Watch GT 3", price: '$7.00 - $99.50', img: Watch },
  ];

  const specs = [
    { label: 'Model', value: '#8786867' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-898921212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
    { label: 'Memory', value: '36GB RAM' },
  ];

  return (
    <LayoutContainer>
    <Stack
      direction={{ md: 'row' }}
      spacing={2}
      justifyContent="space-between"
       alignItems="flex-start"
      sx={{ mt: 3,display:{xs:'none',md:"flex" }}}
    >
      <Stack>
      <Box sx={{ flex: 3, minWidth: 0 }}>
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '6px',
            overflow: 'hidden',
            bgcolor: 'background.paper', 
          }}
        >
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 3 }}>
            <Stack direction="row" spacing={3}>
              {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
                <Link
                  key={tab}
                  component="button"
                  onClick={() => setActiveTab(tab)}
                  underline="none"
                  sx={{
                    py: 2,
                    fontSize: '16px',
                    fontWeight: 500,
                    bgcolor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: activeTab === tab ? 'primary.main' : '#8B96A5' && 'text.fourth',
                    borderBottom: activeTab === tab ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    '&:hover': { color: 'primary.main' },
                    '&:focus': { outline: 'none' }
                  }}
                >
                  {tab}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6, textAlign: 'left' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> 
Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography>

            <TableContainer
              component={Box}
              sx={{
                maxWidth: 450,
                mb: 3,
                border: '1px solid',
                borderColor: '#E0E7EE',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Table size="small">
                <TableBody>
                  {specs.map((row, index) => (
                    <TableRow key={row.label}>
                      <TableCell
                        sx={{
                          bgcolor: '#eff2f4',
                          color: '#505050',
                          width: 150,
                          fontWeight: 400,
                          py: 1.5,
                          borderRight: '1px solid #E0E7EE',
                          borderBottom: index !== specs.length - 1 ? '1px solid #E0E7EE' : 'none',
                        }}
                      >
                        {row.label}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: 'text.secondary',
                          py: 1.5,
                          borderBottom: index !== specs.length - 1 ? '1px solid #E0E7EE' : 'none',
                        }}
                      >
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack spacing={1}>
              {['Some great feature name here', 'Lorem ipsum dolor sit amet, consectetur', 'Duis aute irure dolor in reprehenderit', 'Some great feature name here'].map((text, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <CheckIcon sx={{ fontSize: 18, color: '#8B96A5' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
      </Stack>

      <Stack>
      <Box sx={{
        flex: 1,
        minWidth: 280,
        bgcolor: 'background.paper',
        borderRadius: '6px',
        border: '1px solid',
        borderColor: 'divider',
        p: 2,
        height: 'auto'
      }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, textAlign: "left" }}>You may like</Typography>
        <Stack spacing={2.5}>
          {relatedProducts.map((item) => (
            <Stack key={item.id} direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: 50, height: 70, borderRadius: '4px', border: '1px solid',
                  borderColor: 'divider', p: 0.5, objectFit: 'contain'
                }}
              />
              <Box sx={{ textAlign: 'left' }}>
                <Typography sx={{ color: 'text.primary', fontWeight: 400, lineHeight: 1.2, fontSize: "14px" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: '#8B96A5', mt: 0.5, display: 'block', fontSize: "14px" }}>
                  {item.price}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
    </Stack>
    </LayoutContainer>
    
  );
};

export default Description;