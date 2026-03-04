import React, { useState } from 'react';
import { Box, Container, Chip, Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import BreadcrumbSection from "./components/BreadCrumbSection";
import FilterSidebar from './components/FilterSidebar';
import PaginationSection from "./components/PaginationSection";
import ProductListHeader from "./components/ProductListHeader";
import ProductList from "./components/ProductList";
import SubscribeSection from '../components/layout/SubscribeSection';

const List = () => {
  // 1. Dynamic state for filters
  const [activeFilters, setActiveFilters] = useState([]);

  // 2. Function to add/remove filters (passed to Sidebar)
  const handleFilterToggle = (filterName) => {
    setActiveFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((item) => item !== filterName) // Remove if exists
        : [...prev, filterName] // Add if new
    );
  };

  // 3. Function to clear all
  const clearAllFilters = () => setActiveFilters([]);

  return (
    <>
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 2 }}>
      <Container maxWidth="xl">
        <BreadcrumbSection />

        <Box sx={{ display: 'flex', gap: 3, mt: 2, alignItems: 'flex-start' }}>
          
          <Box sx={{ width: 240, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
            {/* Pass state and toggle function to Sidebar */}
            <FilterSidebar 
              activeFilters={activeFilters} 
              onFilterToggle={handleFilterToggle} 
            />
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <ProductListHeader />
            
            {/* 4. DYNAMIC CHIPS SECTION */}
            {activeFilters.length > 0 && (
              <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center" sx={{ mb: 2, mt: 1 }}>
                {activeFilters.map((filter) => (
                  <Chip
                    key={filter}
                    label={filter}
                    onDelete={() => handleFilterToggle(filter)}
                    deleteIcon={<CloseIcon style={{ fontSize: '16px' }} />}
                    variant="outlined"
                    sx={{ 
                      borderRadius: '5px', 
                      borderColor: '#0D6EFD', 
                      color: '#465166',
                      bgcolor: '#fff',
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                ))}
                
                <Button 
                  variant="text" 
                  onClick={clearAllFilters}
                  sx={{ textTransform: 'none', color: '#0D6EFD', fontSize: '14px', ml: 1 }}
                >
                  Clear all filter
                </Button>
              </Stack>
            )}

            <Box sx={{ my: 2 }}>
              {/* Pass activeFilters to ProductList to actually filter the data */}
              <ProductList activeFilters={activeFilters} />
            </Box>

            <PaginationSection />
          </Box>
        </Box>
      </Container>
    </Box>


    
    <SubscribeSection />
    </>
  );
};

export default List;