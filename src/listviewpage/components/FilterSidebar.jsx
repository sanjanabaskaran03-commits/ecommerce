import React, { useState } from 'react';
import { 
  Box, Typography, Divider, Accordion, AccordionSummary, Link, 
  AccordionDetails, Checkbox, FormControlLabel, Stack, TextField, 
  Button, Slider, Rating, Radio, RadioGroup 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterSection = ({ title, children }) => (
  <Accordion 
    defaultExpanded 
    elevation={0} 
    sx={{ 
      '&:before': { display: 'none' }, 
      bgcolor: 'transparent' 
    }}
  >
    <AccordionSummary 
      expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />} 
      sx={{ px: 0 }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: '16px', color: 'text.primary' }}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ px: 0, pt: 0 }}>{children}</AccordionDetails>
  </Accordion>
);

const FilterSidebar = ({ activeFilters, onFilterToggle }) => {
  const [priceRange, setPriceRange] = useState([0, 999999]);

  // Helper to check if a filter is active
  const isChecked = (value) => activeFilters.includes(value);

  return (
    <Box sx={{ width: '100%', textAlign: 'left' }}>
      <FilterSection title="Category">
        <Stack spacing={2}>
          {['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'].map(item => (
            <Typography 
              key={item} 
              onClick={() => onFilterToggle(item)}
              sx={{ 
                color: isChecked(item) ? 'primary.main' : 'text.secondary', 
                cursor: 'pointer', 
                fontSize: '16px', 
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
              control={
                <Checkbox 
                  size="small" 
                  checked={isChecked(brand)}
                  onChange={() => onFilterToggle(brand)}
                  sx={{ color: 'text.secondary' }} 
                />
              } 
              label={<Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>{brand}</Typography>} 
            />
          ))}
          <Link href="#" underline="none" sx={{ mt: 1, fontSize: '16px' }}>See all</Link>
        </Stack>
      </FilterSection>

      <Divider sx={{ my: 1, borderColor: 'divider' }} />

      <FilterSection title="Features">
        <Stack>
          {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map(feature => (
            <FormControlLabel 
              key={feature} 
              control={
                <Checkbox 
                  size="small" 
                  checked={isChecked(feature)}
                  onChange={() => onFilterToggle(feature)}
                  sx={{ color: 'text.secondary' }} 
                />
              } 
              label={<Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>{feature}</Typography>} 
            />
          ))}
          <Link href="#" underline="none" sx={{ mt: 1, fontSize: '16px' }}>See all</Link>
        </Stack>
      </FilterSection>

      <Divider sx={{ my: 1, borderColor: 'divider' }} />

      <FilterSection title="Price range">
        <Stack spacing={1} sx={{ px: 1 }}>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={0}
            max={999999}
            sx={{ color: 'primary.main', height: 4 }}
          />
          <Stack direction="row" spacing={1}>
            <TextField size="small" placeholder="0" value={priceRange[0]} />
            <TextField size="small" placeholder="999999" value={priceRange[1]} />
          </Stack>
          <Button variant="outlined" fullWidth sx={{ textTransform: 'none', mt: 1 }}>Apply</Button>
        </Stack>
      </FilterSection>

      <Divider sx={{ my: 1, borderColor: 'divider' }} />

      <FilterSection title="Ratings">
        <Stack spacing={0.5}>
          {[5, 4, 3, 2].map((stars) => {
            const label = `${stars} star`;
            return (
              <FormControlLabel 
                key={stars}
                control={
                  <Checkbox 
                    size="small" 
                    checked={isChecked(label)}
                    onChange={() => onFilterToggle(label)}
                    sx={{ color: 'text.secondary' }} 
                  />
                } 
                label={
                  <Rating value={stars} readOnly size="small" sx={{ color: '#FF9017', verticalAlign: 'middle' }} />
                } 
              />
            );
          })}
        </Stack>
      </FilterSection>
    </Box>
  );
};

export default FilterSidebar;