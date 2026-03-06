import React, { useState } from 'react';
import { Box, Chip, Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import BreadcrumbSection from "./components/BreadCrumbSection";
import FilterSidebar from './components/FilterSidebar';
import PaginationSection from "./components/PaginationSection";
import ProductListHeader from "./components/ProductListHeader";
import ProductList from "./components/ProductList";
import SubscribeSection from '../components/layout/SubscribeSection';
import LayoutContainer from '../components/common/LayoutContainer';

const List = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterToggle = (filterName) => {
    setActiveFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((item) => item !== filterName) 
        : [...prev, filterName] 
    );
  };

  const clearAllFilters = () => setActiveFilters([]);

  return (
    <>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 2 }}>
        <BreadcrumbSection />
        <LayoutContainer>
          <Box sx={{ display: 'flex', gap: 3, mt: 2, alignItems: 'flex-start' }}>
            
            <Box sx={{ width: 240, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
              <FilterSidebar 
                activeFilters={activeFilters} 
                onFilterToggle={handleFilterToggle} 
              />
            </Box>

            <Box sx={{ flexGrow: 1, width: "100%" }}>
              <ProductListHeader 
                activeFilters={activeFilters} 
                onFilterToggle={handleFilterToggle} 
              />
              
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
                <ProductList activeFilters={activeFilters} />
              </Box>
              <PaginationSection />
            </Box>
          </Box>
        </LayoutContainer>
      </Box>
      <SubscribeSection />
    </>
  );
};

export default List;