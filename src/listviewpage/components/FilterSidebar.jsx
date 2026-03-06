import React, { useState } from 'react';
import { 
  Box, Typography, Divider, Accordion, AccordionSummary, Link, 
  AccordionDetails, Checkbox, FormControlLabel, Stack, TextField, 
  Button, Slider, Rating, Chip 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const FilterSection = ({ title, children }) => (
  <Accordion defaultExpanded elevation={0} sx={{ '&:before': { display: 'none' }, bgcolor: 'transparent' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />} sx={{ px: 0 }}>
      <Typography sx={{ fontWeight: 600, fontSize: '16px', color: 'text.primary' }}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ px: 0, pt: 0 }}>{children}</AccordionDetails>
  </Accordion>
);

const FilterSidebar = ({ activeFilters = [], onFilterToggle, isMobileDrawer = false }) => {
  const [priceRange, setPriceRange] = useState([0, 999999]);
  const isChecked = (value) => activeFilters.includes(value);
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];

  return (
    <Box sx={{ width: '100%' }}>
      
      {!isMobileDrawer && (
        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
              overflowX: 'auto', 
              pb: 1, 
              '&::-webkit-scrollbar': { display: 'none' } 
            }}
          >
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                onClick={() => onFilterToggle(feature)}
                onDelete={isChecked(feature) ? () => onFilterToggle(feature) : undefined}
                deleteIcon={<CloseIcon style={{ fontSize: '14px' }} />}
                variant={isChecked(feature) ? "filled" : "outlined"}
                sx={{ 
                  borderRadius: '6px',
                  borderColor: isChecked(feature) ? 'primary.main' : 'divider',
                  bgcolor: isChecked(feature) ? '#E3F0FF' : 'transparent',
                  color: isChecked(feature) ? 'primary.main' : 'text.primary',
                }}
              />
            ))}
          </Stack>
        </Box>
      )}

      <Box sx={{ 
        display: { xs: isMobileDrawer ? 'block' : 'none', md: 'block' }, 
        textAlign: 'left' 
      }}>
        <Divider sx={{ my: 0.5, borderColor: 'divider' }} />
        
        <FilterSection title="Category">
          <Stack spacing={1.5}>
            {['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'].map(item => (
              <Typography 
                key={item} 
                onClick={() => onFilterToggle(item)}
                sx={{ 
                  color: isChecked(item) ? 'primary.main' : 'text.secondary', 
                  cursor: 'pointer', fontSize: '16px', 
                  fontWeight: isChecked(item) ? 600 : 400,
                  '&:hover': { color: 'primary.main' } 
                }}
              >
                {item}
              </Typography>
            ))}
            <Link href="#" underline="none" sx={{ mt: 1, fontSize: '16px', color: 'primary.main' }}>See all</Link>
          </Stack>
        </FilterSection>

        <Divider sx={{ my: 1, borderColor: 'divider' }} />

        <FilterSection title="Brands">
          <Stack>
            {['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'].map(brand => (
              <FormControlLabel 
                key={brand} 
                control={<Checkbox size="small" checked={isChecked(brand)} onChange={() => onFilterToggle(brand)} />} 
                label={<Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>{brand}</Typography>} 
              />
            ))}
          </Stack>
        </FilterSection>

        <Divider sx={{ my: 1, borderColor: 'divider' }} />

        <FilterSection title="Features">
          <Stack>
            {features.map(feature => (
              <FormControlLabel 
                key={feature} 
                control={<Checkbox size="small" checked={isChecked(feature)} onChange={() => onFilterToggle(feature)} />} 
                label={<Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>{feature}</Typography>} 
              />
            ))}
          </Stack>
        </FilterSection>

        <Divider sx={{ my: 1, borderColor: 'divider' }} />

        <FilterSection title="Price range">
          <Stack spacing={2} sx={{ px: 1, mt: 1 }}>
            <Slider 
              value={priceRange} 
              onChange={(e, newValue) => setPriceRange(newValue)} 
              min={0} max={1000} 
              sx={{ color: 'primary.main', height: 4 }} 
            />
            <Stack direction="row" spacing={1}>
              <TextField size="small" placeholder="Min" value={priceRange[0]} />
              <TextField size="small" placeholder="Max" value={priceRange[1]} />
            </Stack>
            <Button variant="outlined" fullWidth sx={{ textTransform: 'none' }}>Apply</Button>
          </Stack>
        </FilterSection>

        <Divider sx={{ my: 1, borderColor: 'divider' }} />

        <FilterSection title="Ratings">
          <Stack spacing={0.5}>
            {[5, 4, 3, 2].map((stars) => (
              <FormControlLabel 
                key={stars}
                control={<Checkbox size="small" checked={isChecked(`${stars} star`)} onChange={() => onFilterToggle(`${stars} star`)} />} 
                label={<Rating value={stars} readOnly size="small" sx={{ color: '#FF9017', verticalAlign: 'middle' }} />} 
              />
            ))}
          </Stack>
        </FilterSection>
      </Box>
    </Box>
  );
};

export default FilterSidebar;