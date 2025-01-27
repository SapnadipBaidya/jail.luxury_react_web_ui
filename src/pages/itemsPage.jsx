import React, { useEffect, useState, useCallback } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  findItemsByCatagoryId,
  getAllColors,
  getSizeFilterByCatagory,
} from "../store/actions/itemActions";
import GridWrapper from "../components/wrappers/GridWrapper";
import FilterWrapper from "../components/wrappers/FilterWrapper";
import { useAuth } from "../contexts/AuthProvider";
import SortFilterComponent from "../components/wrappers/sortFilterComponent";
import PaginationComponent from "../components/paginationComponent/pagination";
import SortFilterComponentMobile from "../components/wrappers/SortFilterComponentMobile";
import FilterDrawerMobile from "../components/wrappers/FilterDrawerMobile";

function ItemsPage() {
  const { user } = useAuth();
  const theme = useTheme();
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.idStorageReducer.id);
  const itemsArr = useSelector((state) => state.itemReducer);
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [showFilters, setShowFilters] = useState(true);
  const [page, setPage] = useState(1);
  const [currentFilterData, setCurrentFilterData] = useState({
    gender: "",
    size: [],
    color: [],
    price: [0, 1000000],
  });
  const [selectedFilters, setSelectedFilters] = useState({
    gender: "",
    size: [],
    color: [],
    price: [0, 1000000],
  });

  const fetchItems = (selectedFilter) => {
    const payload = {
      productFilters: {
        sizes: selectedFilter?.size,
        colors: selectedFilter?.color,
        fk_category_id: categoryId,
        gender: selectedFilter?.gender,
        priceStart: selectedFilter?.price[0],
        priceEnd: selectedFilter?.price[1],
      },
      defaultFlag: 1,
      page,
      userId: user?.id,
    };
    dispatch(findItemsByCatagoryId(payload));
  };

  useEffect(() => {
    fetchItems(currentFilterData);
    dispatch(getSizeFilterByCatagory(categoryId));
    dispatch(getAllColors());
  }, [categoryId, page]);

  const onClearFilters = () => {
    const defaultFilters = {
      gender: "",
      size: [],
      color: [],
      price: [0, 1000000],
    };
    setSelectedFilters(defaultFilters);
    setCurrentFilterData(defaultFilters);

    const payload = {
      productFilters: {
        fk_category_id: categoryId,
        priceStart: 0,
        priceEnd: 1000000,
        sizes: [],
        colors: [],
      },
      defaultFlag: 1,
      page,
      userId: user?.id,
    };

    dispatch(findItemsByCatagoryId(payload));
  };

  const onApplyFilters = (filters) => {
    setCurrentFilterData(filters);
    fetchItems(filters);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100vw",
    maxHeight: "100vh",
    overflow: "hidden",
    border:"5px solid black"
  };

  return (
    <div style={containerStyle}>
      

      {/* 🔄 Main Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobileOrTablet ? "column" : "row",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "99%",
          flexGrow: 1,
          overflow: "auto"
        }}
      >
        {/* 🔹 Desktop View: Show Both Filter & Grid */}

        {isMobileOrTablet ? (
          <FilterDrawerMobile
            onApplyFilters={onApplyFilters}
            onClearFilters={onClearFilters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setShowFilters={setShowFilters}
            showFilters={showFilters}
          />
        ) : (
          <FilterWrapper
            onApplyFilters={onApplyFilters}
            onClearFilters={onClearFilters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            flexGrow: 1
          }}
        >
          {isMobileOrTablet ? (
        <SortFilterComponentMobile
          setShowFilters={setShowFilters}
          showFilters={showFilters}
        />
      ) : (
        <SortFilterComponent
          setShowFilters={setShowFilters}
          showFilters={showFilters}
        />
      )}
          <GridWrapper
            itemsArr={itemsArr}
            type="Product"
            setShowFilters={setShowFilters}
            showFilters={showFilters}
            page={page}
            setPage={setPage}
          />

          {/* 🔹 Pagination Always Under GridWrapper */}
          <PaginationComponent page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default ItemsPage;
