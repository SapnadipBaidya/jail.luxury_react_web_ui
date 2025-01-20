import React, { useEffect, useState } from 'react';
import { Grid, Button, useMediaQuery, useTheme, Slide } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findItemsByCatagoryId } from '../store/actions/itemActions';
import GridWrapper from '../components/wrappers/GridWrapper';
import FilterWrapper from '../components/wrappers/FilterWrapper';

function ItemsPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.idStorageReducer.id);
  const itemsArr = useSelector((state) => state.itemReducer);

  // State to show/hide filter menu on mobile/tablet
  const [showFilters, setShowFilters] = useState(false);

  // Detect screen size
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md')); // ✅ Mobile/Tablet Breakpoint

  useEffect(() => {
    const payload = { productFilters: { fk_category_id: categoryId }, defaultFlag: 1, page: 1 };
    dispatch(findItemsByCatagoryId(payload));
  }, [dispatch, categoryId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      
      {/* Show Filter Button only in Mobile/Tablet View */}


      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        {/* Show Filters only if it's Desktop or if showFilters is true */}
        {(showFilters && !isMobileOrTablet) && 
           <FilterWrapper />
       }
        
        {/* Show GridWrapper only if it's Desktop or Filters are hidden */}
         <GridWrapper itemsArr={itemsArr} type="Product" setShowFilters={setShowFilters} showFilters={showFilters} />
      </div>
    </div>
  );
}

export default ItemsPage;